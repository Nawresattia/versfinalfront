import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamionServiceService {
  private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  DeleteCamion(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"DeleteCamion/"+id);
  }
  getCamionById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}Cammion/${id}`)
  }
  updateCamion(body,id):Observable<any>{
    return this.http.put(`${this.baseUrl}update/${id}`,body)
  }
  insertCammion(body):Observable<any>{
    return this.http.post(`${this.baseUrl}InsertCamion/`,body)
  }
  getAllchau():Observable<any>{
    return this.http.get(this.baseUrl+"AllChauffeur");
  }
}
