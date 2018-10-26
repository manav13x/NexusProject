import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/sercices/customer.service';
import { Customer } from 'src/app/model/customer';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  isSuccess:boolean=false;
  isEditing:boolean;
  cust:Customer;
    constructor(
      private activatedRoute:ActivatedRoute,
      private custService:CustomerService,
      private router:Router
    ) { }
  
    ngOnInit() {
      this.cust= new Customer();
    }
    reset(){
      this.isSuccess=false;
    }
  
    save(){
        this.custService.addCustomer(this.cust).subscribe(
          (data)=>{
            this.isSuccess=true;
           
          },
          (error)=>{alert("Your email ID or Mobile Number Already Exist");}
        );
      }
    }
  
  