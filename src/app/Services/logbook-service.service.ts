import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogbookServiceService{
  private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  InsertReception(body):Observable<any>{
    return this.http.post(`${this.baseUrl}ajouterReception`,body)
  }
  Insertparcroulant(body):Observable<any>{
    return this.http.post(`${this.baseUrl}InsertParcRoulant`,body)
  }

}
