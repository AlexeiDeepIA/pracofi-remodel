import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/_models/user.model';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  dataSource: UserModel[] = [];
  selectedUser: any;
  response: any;

  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);      
    });
  }

  createUser(form: NgForm) {
    this.userService.createUser(form.value).subscribe( 
      data =>{
          if(!data){
            Swal.fire({
              toast: true,
              icon: 'error',
              title: 'Ups! Algo ocurrio... intento de nuevo',
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
        } else {
            Swal.fire({
              toast: true,
              icon: 'success',
              title: 'Usuario creado!',
              animation: true,
              position: 'top',
              showConfirmButton: false,
              timer: 1200,
              timerProgressBar: true,
              didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          }).then(function(){
            location.reload()
          })
        }               
      }
    )
  }

  editUser(user: any) {
    this.selectedUser = { ...user }; 
    
  }

  saveChanges() {
    if(this.selectedUser){
      this.userService.updateUser(this.selectedUser._id, this.selectedUser).subscribe(
        (res: any) => {                          
          Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Cambios guardados!',
            animation: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
            didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).then(function(){
          location.reload();          
        }) 
        this.selectedUser = null;
        } 
      )
    }    
  }
  
  cancelEdit() {
    this.selectedUser = null; // Limpia el usuario seleccionado sin guardar cambios
  }
  

  deleteUser(id: string){
    this.userService.delete(id).subscribe(data =>{
      console.log('Eliminado');
          Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Eliminado',
            animation: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
            didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      }).then(function(){
        location.reload();
      });      
    })
  }
}
