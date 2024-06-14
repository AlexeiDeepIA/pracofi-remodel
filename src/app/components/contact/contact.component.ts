import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/_services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private emailService: EmailService
  ){}

  sendEmail(form: NgForm){
    this.emailService.sendMail(form).subscribe(
      (data) =>{
        Swal.fire({
          toast: true,
          icon: 'success',
          title: 'Correo enviado! Nosotros nos contactamos contigo',
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
      }
    )
  }

}
