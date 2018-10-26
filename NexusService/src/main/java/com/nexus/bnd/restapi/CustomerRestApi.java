package com.nexus.bnd.restapi;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.bnd.model.Customer;
import com.nexus.bnd.service.ICustomerService;

@RestController
@CrossOrigin
@RequestMapping("/customers")
public class CustomerRestApi {

	@Autowired
	ICustomerService service;
	
	@GetMapping
	public ResponseEntity<List<Customer>> getAllCust()
	{
		return new ResponseEntity<>(service.getAllCustomer(), HttpStatus.OK);
	}
	
	
	@PostMapping
	public ResponseEntity<Customer> addCust(@RequestBody Customer customer)
	{
		ResponseEntity<Customer> resp = null;
		if(service.existsByEmailId(customer.getEmailId()))
			resp = new ResponseEntity<Customer>(HttpStatus.ALREADY_REPORTED);
		if(service.existsByMobileNumber(customer.getMobileNumber()))
			resp =  new ResponseEntity<Customer>(HttpStatus.ALREADY_REPORTED);
		if(resp==null)
		{
			Customer c = service.addCustomer(customer);
			if(c==null)
				resp = new ResponseEntity<Customer>(HttpStatus.BAD_REQUEST);
			else
			resp =  new ResponseEntity(c,HttpStatus.OK);
		}
			return resp;
	}
	
	@PutMapping
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer)
	{
		ResponseEntity<Customer> resp = null;
		Customer c1 = service.getCustomerById(customer.getcId());
		if(!c1.getEmailId().equals(customer.getEmailId()))
			if(service.existsByEmailId(customer.getEmailId()))
				resp = new ResponseEntity<Customer>(HttpStatus.ALREADY_REPORTED);
		if(!c1.getMobileNumber().equals(customer.getMobileNumber()))
			if(service.existsByMobileNumber(customer.getMobileNumber()))
				resp =  new ResponseEntity<Customer>(HttpStatus.ALREADY_REPORTED);
		if(resp==null)
		{
			Customer c = service.updateCustomer(customer);
			if(c==null)
				resp = new ResponseEntity<Customer>(HttpStatus.BAD_REQUEST);
			else
			resp =  new ResponseEntity(c,HttpStatus.OK);
		}
			return resp;
	}
	@GetMapping("/{field}/{srchValue}")
	public ResponseEntity<List<Customer>> findCustomer(@PathVariable String srchValue,
			@PathVariable String field){
		ResponseEntity<List<Customer>> resp = null;
		switch(field)
		{
		case "mobile": Customer c = service.findByMobileNumber(srchValue);
					   if(c!=null)
						   resp = new ResponseEntity<>(Collections.singletonList(c),HttpStatus.OK);
					   else
						   resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
					   break;
		case "email": Customer c1  = service.findByEmailId(srchValue);
						if(c1!=null)
							resp = new ResponseEntity<>(Collections.singletonList(c1),HttpStatus.OK);
						else
							resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
						break;
		default:
				resp = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
}
