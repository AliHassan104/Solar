import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.baseUrl+"/api/login"

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
