import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoadserviceService {
  private baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient, private snackBar: MatSnackBar,){ }

  post(body, rest) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      let options = { headers: headers }
      this.http.post(this.baseUrl + rest, body, options)
        .subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });

  }

  get(rest) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      let options = { headers: headers }
      this.http.get(this.baseUrl + rest, options)
        .subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });

  }



  // Extra Functions 

  save_data(name, x) {
    localStorage.setItem(name, x)
  }
  getData(name) {
    return localStorage.getItem(name);
  }
  delete_data(x) {
    localStorage.remove(x)
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 4000,
    });
  }
}
