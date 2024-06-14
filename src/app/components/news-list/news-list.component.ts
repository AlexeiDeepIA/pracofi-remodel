import { Component } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { News } from 'src/app/_models/news';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  dataSource: News [] = [];
  selectedNew: any;
  response: any;  

  constructor (
    private newsService: NewsService    
  ){}

  ngOnInit(){
    this.newsService.getNew().subscribe(
      (data) =>{
      this.dataSource = data;            
      }
    )
  }

  

  addNews(form: NgForm) {
    this.newsService.addNews(form.value).subscribe( 
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
              title: 'Noticia creado!',
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

  editNews(news: any) {
    this.selectedNew = { ...news }; 
    
  }

  saveChanges() {
    if(this.selectedNew){
      this.newsService.updateNews(this.selectedNew._id, this.selectedNew).subscribe(
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
        this.selectedNew = null;
        } 
      )
    }    
  }
  
  cancelEdit() {
    this.selectedNew = null; // Limpia el usuario seleccionado sin guardar cambios
  }
  

  deleteNew(id: string){
    this.newsService.deleteNews(id).subscribe(
      (data) =>{
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
      }
    )
  }

}
