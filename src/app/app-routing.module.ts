import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MhomeComponent } from './component/mhome/mhome.component';
import { authGuard } from './auth.guard'
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RecurringComponent } from './component/recurring/recurring.component';
import { CommitmentsComponent } from './component/commitments/commitments.component';
import { DownloadTaxComponent } from './component/download-tax/download-tax.component';
import { DonationSummaryComponent } from './component/donation-summary/donation-summary.component';
import { DonateComponent } from './component/donate/donate.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:MhomeComponent, canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'donation', component:DonationSummaryComponent},
  {path:'tax', component:DownloadTaxComponent},
  {path:'commitment', component:CommitmentsComponent},
  {path:'recurring', component:RecurringComponent},
  {path:'profile', component:ProfileComponent},
  {path:'donate', component:DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
