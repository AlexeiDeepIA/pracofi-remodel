import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { Router } from '@angular/router';
import { News } from 'src/app/_models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  dataSource: News[] = []

  constructor (
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(){
    this.newsService.getNew().subscribe(
      (data) =>{                
        this.dataSource = data;
        console.log(this.dataSource);        
      }
    )
  }

  verDetalle(noticia: any) {    
    this.router.navigate(['/details', { news: JSON.stringify(noticia) }]);
  }

}
