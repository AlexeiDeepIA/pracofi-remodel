import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

    signUpUser(user: any) {
      return this.http.post<any>(environment.api + '/signup', user);
    }
  
    signInUser(user: any) {
      return this.http.post<any>(environment.api + '/login', user);
    }

    isLogged(){
      const token = localStorage.getItem('token');    
      return !!token;      
    }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/landing']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
