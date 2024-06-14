import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuaranteeComponent } from './components/guarantee/guarantee.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContpaqiComponent } from './components/contpaqi/contpaqi.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InicioPagsComponent } from './components/inicio-pags/inicio-pags.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthLoginService } from './_services/auth-login.service';
import { CatchTokenService } from './_services/catch-token.service';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDashboardPageComponent } from './pages/news-dashboard-page/news-dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    HomeServicesComponent,
    FooterComponent,
    GuaranteeComponent,
    LandingPageComponent,
    ServicesPageComponent,
    ContpaqiComponent,
    AboutPageComponent,
    NewPagesComponent,
    ContactPageComponent,
    InicioPagsComponent,
    ServicesComponentComponent,
    NewsComponent,
    ContactComponent,
    DashboardPageComponent,
    DashboardComponent,
    NavDashboardComponent,
    UserListComponent,
    UsersPageComponent,
    NewsDetailsComponent,
    NewsListComponent,
    NewsDashboardPageComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthLoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
