import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginRequest } from 'src/app/model/request/login-request.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { GeneralResponse } from 'src/app/shared/general.response';
import { AllowAccessResponse } from 'src/app/authentication/model/Response/allow-access.response';
import { UserModel } from 'src/app/authentication/model/user.model';
@Component({
  selector: 'app-login-as-trainee',
  templateUrl: './login-as-trainee.component.html',
  styleUrls: ['./login-as-trainee.component.css']
})
export class LoginAsTraineeComponent  implements OnInit{
  faLock =faLock;

  request:LoginRequest = {email:'',password:''};
  loginForm!:FormGroup;

  constructor(private loginService: LoginService,private router:Router,private fb:FormBuilder,private authServ:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    })
  }

  SignIn() {
    // Use the injected service to call the sign-in method
    this.request.email = this.loginForm.value.email
    this.request.password = this.loginForm.value.password
    
    console.log("login")
    this.loginService.OnSignInClick(this.request).subscribe((data:GeneralResponse<UserModel>|any)=>{

      console.log(data);
      if( data )
      {
        if(this.loginForm.value.rememberMe)
        {
          this.authServ.user = data.value
           this.authServ.SetTokens(data.value.jwtToken);
        }
        this.router.navigate(['home']);

      }else{
        this.loginService.DisplayMessage('user','red');
      }
      
    },catchError(error=>{
      this.loginService.DisplayMessage('user','red')
      return error
    }));

  }
}

