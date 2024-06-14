import { Component } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { News } from 'src/app/_models/news';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {

  seeDetails: boolean = false;
  selectedtNew: any;
  noticia: any;
  dataSource: News [] = [];

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ){}

  ngOnInit(){
    this.newsService.getNew().subscribe(
      (data) =>{
        this.dataSource = data.slice(0, 4);
        console.log(this.dataSource);
        
      }
    )

    this.route.params.subscribe(params => {
      this.noticia = JSON.parse(params['news']);
    });
  }
 

}
