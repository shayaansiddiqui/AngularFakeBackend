import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import { AddBalanceComponent } from './secure/account/add-balance/add-balance.component';
import { WithdrawBalanceComponent } from './secure/account/withdraw-balance/withdraw-balance.component';
import { TransferBalanceComponent } from './secure/account/transfer-balance/transfer-balance.component';
import { DashboardComponent } from './secure/account/dashboard/dashboard.component';
import { HeaderComponent } from './navigation/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddBalanceComponent,
    WithdrawBalanceComponent,
    TransferBalanceComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
