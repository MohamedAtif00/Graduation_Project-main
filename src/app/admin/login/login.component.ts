import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminLogin } from '../model/admin-login.model';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  info!:AdminLogin;
  loginForm!:FormGroup;
  faLock = faLock
  constructor(private loginServ:LoginService,private fb:FormBuilder,private authServ:AuthService,private router:Router){}

  ngOnInit(): void {
    this.loginForm  = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit()
  {
    this.info = {email:this.loginForm.value.email,password:this.loginForm.value.password}

    this.loginServ.LoginAdmin(this.info).subscribe(data=>{
      console.log(data);
      if(data.value)
      {
        this.authServ.SetTokens(data.value.jwtToken);
        this.router.navigate(['admin','trainer-section']);
      }

    });

  }



}
