import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders(
    {
        'Content-Type':  'application/x-www-form-urlencoded',
        Accept: '*/*',
    }
    );

  constructor(private http:HttpClient,private _router:Router) { }


  
  Register(data){
    return this.http.post("https://localhost:44339/api/Account/Register",data);
  }

  Login(data){
    const body = new HttpParams({fromObject: data});
    const options = { headers: this.headers};
    return this.http.post("https://localhost:44339/token",body.toString(), options);
  }

}
