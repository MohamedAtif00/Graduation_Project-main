import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { development }from '../../environment'
import { LoginRequest } from '../model/request/login-request.model';
import { GeneralResponse } from '../shared/general.response';
import { UserModel } from '../authentication/model/user.model';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login:string = `${development.localhost}Authentication/Login`
  constructor(private http:HttpClient){}

    OnSignInClick(request:LoginRequest){
  
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post<GeneralResponse<UserModel>>(this.login, JSON.stringify(request), { headers }).pipe(
        // catch error
        catchError(error=>{
          console.log(error);
          return error;
        }

      ));

    }

    DisplayMessage(title:string,background:string | null)
    {
      // alert("Thank you for Sign In " + title + " :)" )
    // successful message
    const messageBox = document.createElement("div");
    messageBox.innerHTML = "Successful Sign In as a "+ title + "! :)";
    messageBox.style.backgroundColor = background??"#4CAF50";
    messageBox.style.color = "white";
    messageBox.style.padding = "10px";
    messageBox.style.position = "fixed";
    messageBox.style.top = "50%";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translate(-50%, -50%)";
    messageBox.style.zIndex = "9999";
    document.body.appendChild(messageBox);

    // hide the message box after 3 seconds
    setTimeout(function() {
    messageBox.style.display = "none";
    }, 3000);

    }




}
