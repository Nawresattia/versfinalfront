import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirecteurGeneralServiceService {

  getAlldirg() {
    throw new Error('Method not implemented.');
  }
  DeleteUser(id: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  DeleteDirecteurGeneral(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"DeleteDirecteurGeneral/"+id);
  }
  getDirecteurGeneralById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}DirecteurGeneral/${id}`)
  }
  updateDirecteurGeneral(body,id):Observable<any>{
    return this.http.put(`${this.baseUrl}modifyDirecteurGeneral/${id}`,body)
  }
  insertDirecteurGeneral(body):Observable<any>{
    return this.http.post(`${this.baseUrl}InsertDirecteurGeneral/`,body)
  }
  
}

  