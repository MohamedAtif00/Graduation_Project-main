import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RegisterResponse } from "src/app/model/response/register-response.model";
import { development } from "src/environment";
import { AdminLogin } from "../model/admin-login.model";
import { GeneralResponse } from "src/app/shared/general.response";


@Injectable({
    providedIn:'root'
})
export class LoginService{

    private postLogin:string = `${development.localhost}Authentication/LoginAdmin`


    constructor(private http:HttpClient){}

    LoginAdmin(request:AdminLogin)
    {
        return this.http.post<GeneralResponse<RegisterResponse>>(this.postLogin ,request);
    }


}