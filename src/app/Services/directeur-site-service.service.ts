import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirecteurSiteServiceService {
  getAlldirs() {
    throw new Error('Method not implemented.');
  }
  DeleteUser(id: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  DeleteDirecteurSite(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"DeleteDirecteurSite/"+id);
  }
  getDirecteurSiteById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}DirecteurSite/${id}`)
  }
  updateDirecteurSite(body,id):Observable<any>{
    return this.http.put(`${this.baseUrl}modifyDirecteurSite/${id}`,body)
  }
  insertDirecteurSite(body):Observable<any>{
    return this.http.post(`${this.baseUrl}InsertDirecteurSite/`,body)
  }
  
}

  