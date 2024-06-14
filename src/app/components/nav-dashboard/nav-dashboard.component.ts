import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthLoginService } from 'src/app/_services/auth-login.service';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.scss']
})
export class NavDashboardComponent {

  currentRoute: string = ''; // Inicializar la propiedad

  constructor(
    private router: Router,
    private authService: AuthLoginService
    ) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;      
    });
  }

  logout(){
    this.authService.logout();    
  }

}
