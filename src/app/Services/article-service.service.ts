import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  DeleteArticle(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"DeleteArticle/"+id);
  }
  getArticleById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}Article/${id}`)
  }
  updateArticle(body,id):Observable<any>{
    return this.http.put(`${this.baseUrl}updateArticle/${id}`,body)
  }
  insertArticle(body):Observable<any>{
    return this.http.post(`${this.baseUrl}InsertArticle/`,body)
  }

  getAllFour():Observable<any>{
    return this.http.get(this.baseUrl+"AllFournisseur");
  }

}
