import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {
private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  DeleteFournisseur(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"DeleteFournisseur/"+id);
  }
  getFournisseurById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}Fournisseur/${id}`)
  }
  updateFournisseur(body,id):Observable<any>{
    return this.http.put(`${this.baseUrl}updatefournisseur/${id}`,body)
  }
  insertFournisseur(body):Observable<any>{
    return this.http.post(`${this.baseUrl}InsertFournisseur/`,body)
  }

}
