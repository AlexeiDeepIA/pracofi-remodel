import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../_models/user.model';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  createUser(user: any) {
    return this.http.post<any>(environment.api + '/newuser', user);
  }

  getUsers(): Observable<any> {
    return this.http.get(environment.api + '/getusers');
  }
  
  updateUser(id: string, user: UserModel){
    return this.http.put(environment.api + '/updateuser/' + id, user);
  }

  getDetails(id: string): Observable<any>{
    return this.http.get<UserModel>(environment.api + '/userdetails/' + id)
  }
  
  delete(id: string) {
    return this.http.delete(environment.api + '/deleteuser/' + id)           
  }


}
