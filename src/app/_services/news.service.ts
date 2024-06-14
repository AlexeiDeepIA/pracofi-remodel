import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../_models/news';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient
  ) { }

  addNews(news: any){
    return this.http.post<any>(environment.api + '/addnews', news);
  }

  getNew(): Observable<any>{
    return this.http.get(environment.api + '/getnews')
  }
  
  getDetails(id: string): Observable<any>{
    return this.http.get<News>(environment.api + '/details/' + id);
  }
  
  updateNews(id: string, news: News){
    return this.http.put(environment.api + '/updatenews/' + id, news);
  }
    
  deleteNews(id: string){
    return this.http.delete<any>(environment.api + '/deletenews/' + id);
  }
}
