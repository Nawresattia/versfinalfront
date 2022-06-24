import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService 
  {
    private baseUrl = "http://localhost:8080/";
      constructor(private http: HttpClient) { }
      DeleteUser(id:any):Observable<any>{
        return this.http.delete(this.baseUrl+"DeleteUser/"+id);
      }
      getUserById(id:any):Observable<any>{
        return this.http.get(`${this.baseUrl}User/${id}`)
      }
      updateUser(body,id):Observable<any>{
        return this.http.put(`${this.baseUrl}modifyUser/${id}`,body)
      }
      InsertUser(body):Observable<any>{
        return this.http.post(`${this.baseUrl}InsertUser/`,body)
      }
    }
    