import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/_services/auth-login.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = {};

  constructor (
    private authService: AuthLoginService,
    private router: Router
  ) {}

  signIn(loginForm: NgForm){
    this.authService.signInUser(loginForm.value).subscribe((res: any) =>{
      localStorage.setItem('token', res.token);                  
        if(!res.ok == true){
            Swal.fire({
              toast: true,
              icon: 'error',
              title: 'Ups! Algo ocurrio, intenta de nuevo',
              animation: true,
              position: 'top',
              showConfirmButton: false,
              timer: 1200,
              timerProgressBar: true,
              didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })            
        } else{
            Swal.fire({
              toast: true,
              icon: 'success',
              title: 'Bienvenido, ' + res.usuario.name,
              animation: true,
              position: 'top',
              showConfirmButton: false,
              timer: 1200,
              timerProgressBar: true,
              didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).then((res) =>{
            this.router.navigate(['/dashboard'])
        })
        }        
      })
    }
           
    logout(){
      this.authService.logout()
    }

}
