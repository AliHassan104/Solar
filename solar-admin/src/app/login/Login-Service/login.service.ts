import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8081/api/login"

  constructor(private http: HttpClient) { }

  Login(obj:any){
    return this.http.post(this.url,obj)
  }

  getToken() {
    let token = localStorage.getItem("formdata")
    if(token != null){
        // token = token
        return "Bearer "+ token
    }
    return null;
  }
}
