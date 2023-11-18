import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { ContactComponent } from './component/contact/contact.component';
import { MhomeComponent } from './component/mhome/mhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { RegisterComponent } from './component/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LatestComponent } from './component/latest/latest.component';
import { DonationSummaryComponent } from './component/donation-summary/donation-summary.component';
import { DownloadTaxComponent } from './component/download-tax/download-tax.component';
import { CommitmentsComponent } from './component/commitments/commitments.component';
import { RecurringComponent } from './component/recurring/recurring.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DonateComponent } from './component/donate/donate.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    MhomeComponent,
    RegisterComponent,
    FooterComponent,
    DashboardComponent,
    LatestComponent,
    DonationSummaryComponent,
    DownloadTaxComponent,
    CommitmentsComponent,
    RecurringComponent,
    ProfileComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
