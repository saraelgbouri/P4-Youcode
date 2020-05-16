import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    'Nom':new FormControl('', Validators.required),
    'Prenom':new FormControl('', Validators.required),
    'Tele':new FormControl('', Validators.required),
    'Image':new FormControl('', Validators.required),
    'Email':new FormControl('', Validators.required),
    'Password':new FormControl('', Validators.required),
    'ConfirmPassword':new FormControl('', Validators.required),
    'Role':new FormControl('', Validators.required)


  })


  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  createAccount(){

    this.authService.Register(this.registerForm.value)
    .subscribe((res)=>{
      console.log(res);
    })
    
  }

}
