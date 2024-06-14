import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutesService } from './_services/auth-routes.service';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsDashboardPageComponent } from './pages/news-dashboard-page/news-dashboard-page.component';


const routes: Routes = [  
  { path: 'landing', component: LandingPageComponent},    
  { path: 'login', component: LoginComponent},
  { path: 'news',component: NewPagesComponent},
  { path: 'about',component: AboutPageComponent},
  { path: 'services', component:ServicesPageComponent},
  { path: 'contact', component:ContactPageComponent},
  { path: 'details', component: NewsDetailsComponent},
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthRoutesService]},
  { path: 'users', component: UsersPageComponent, canActivate: [AuthRoutesService]},
  { path: 'news-dashboard', component: NewsDashboardPageComponent, canActivate: [AuthRoutesService]},
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,    
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
