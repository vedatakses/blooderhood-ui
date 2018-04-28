import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DonationService } from './services/donation.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginComponent,
    DashboardComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupFormComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'subscriptions', component: SubscriptionsComponent}
    ])
  ],
  providers: [
    AuthService, 
    DonationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
