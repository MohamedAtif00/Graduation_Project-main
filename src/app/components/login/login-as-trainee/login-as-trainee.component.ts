import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginRequest } from 'src/app/model/request/login-request.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-as-trainee',
  templateUrl: './login-as-trainee.component.html',
  styleUrls: ['./login-as-trainee.component.css']
})
export class LoginAsTraineeComponent  implements OnInit{
  faLock =faLock;

  request:LoginRequest = {email:'',password:''};
  loginForm!:FormGroup;

  constructor(private loginService: LoginService,private router:Router,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  SignIn() {
    // Use the injected service to call the sign-in method
    this.request.email = this.loginForm.value.email
    this.request.password = this.loginForm.value.password
    
    console.log("login")
    this.loginService.OnSignInClick('user',this.request).subscribe(data=>{
      console.log(data);

      this.router.navigate(['home']);
      
    });

  }
}

