import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/sercices/customer.service';
import { Customer } from 'src/app/model/customer';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  mobNum:string;
  password:string;
  customers:Customer[];
  msg:String='';
  isSuccess:boolean=false;
  isFailure:boolean=false;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private custService:CustomerService,
    private appComp:AppComponent
  ) { }

  ngOnInit() {
  }



  save()
  {
    this.custService.searchCustomers("mobile",this.mobNum).subscribe(
      (data)=>{
          if(data[0].pwd==this.password)
            { 
              this.isFailure=false;
              this.isSuccess=true;
              this.msg="Login Successfull!";
              document.cookie = "email="+data[0].emailId+"; expires=Thu, 18 Dec 2019 12:00:00 UTC;path=/";
              this.appComp.setUser();
            }
            else{
              this.isSuccess=false;
              this.isFailure=true;
              this.msg="Wrong Password Entered!";
            }
      },
      (error)=>{
          this.isSuccess=false;
          this.isFailure=true;
          this.msg="Mobile Number Not Found";
      }
    );
  }
}
