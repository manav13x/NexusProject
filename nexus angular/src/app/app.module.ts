import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { PayAndRechargeComponent } from './component/pay-and-recharge/pay-and-recharge.component';
import { BuyAndExploreComponent } from './component/buy-and-explore/buy-and-explore.component';
import { HelpdeskComponent } from './component/helpdesk/helpdesk.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { BillDasboardComponent } from './component/bill-dasboard/bill-dasboard.component';


const routeMap:Routes = [
  {path:'',component:DashboardComponent},
  {path:'buynexplore',component:BuyAndExploreComponent},
  {path:'payandrecharge',component:PayAndRechargeComponent},
  {path:'helpdesk',component:HelpdeskComponent},
  {path:'account',component:LoginPageComponent},
  {path:'regForm',component:RegisterFormComponent},
  {path:'editCust/:id',component:RegisterFormComponent},
  {path:"billdashboard",component:BillDasboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    PayAndRechargeComponent,
    BuyAndExploreComponent,
    HelpdeskComponent,
    RegisterFormComponent,
    BillDasboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeMap)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
