import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurServiceService {private baseUrl = "http://localhost:8080/";
constructor(private http: HttpClient) { }
DeleteChauffeur(id:any):Observable<any>{
  return this.http.delete(this.baseUrl+"DeleteChauffeur/"+id);
}
getChauffeurById(id:any):Observable<any>{
  return this.http.get(`${this.baseUrl}Chauffeur/${id}`)
}
updateChauffeur(body,id):Observable<any>{
  return this.http.put(`${this.baseUrl}updatechauffeur/${id}`,body)
}
insertChauffeur(body):Observable<any>{
  return this.http.post(`${this.baseUrl}InsertChauffeur/`,body)
}

}
