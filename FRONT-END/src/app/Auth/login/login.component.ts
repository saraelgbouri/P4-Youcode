import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  finalObject;
  loginForm = new FormGroup({

    'grant_type':new FormControl('password'),
    'username':new FormControl('', Validators.required),
    'password':new FormControl('', Validators.required),
  })

  constructor(private authService:AuthService,private router:Router) { }
  ngOnInit() {
  }


  login(){
      this.authService.Login(this.loginForm.value)
      .subscribe((res)=>{
        console.log(res);
      })
    }

 


}
