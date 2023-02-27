import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './Login-Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  token:any;
  
  constructor(private fb:FormBuilder , private router:Router, private loginService: LoginService){}

  loginForm = this.fb.group({
    name:['', Validators.required],
    password:['', Validators.required]
  })

  onSubmit(){
    // debugger
    // this.loginForm.value;
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    
    this.loginService.Login(this.loginForm.value).subscribe(res=>{
      console.log(res);
      
      this.token= res 
      localStorage.setItem('formdata',this.token.jwt);
      this.router.navigate(["Dashboard"])
    })

  }
  get name(){
    return this.loginForm.get('name')
  }
  get password(){
    return this.loginForm.get('password')
  }

}
