import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { development } from 'src/environment';
import { GeneralResponse } from '../model/response/general-response.model';
import { RegisterResponse } from '../model/response/register-response.model';
import { RegisterRequest } from '../model/request/register-request.model';
import { Trainer } from '../model/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  request:RegisterRequest = {email:"",
                              firstName:'',
                              lastName:'',
                              password:'',
                              birthdate:new Date(),
                              nationalId:'',
                              image:null, 
                              city:'',
                              phone:'',
                              gender:'',
                              coachId:'',
                              TennisExp:'',
                              timeSession:{Hours:2,Minutes:3,AmPm:''},
                              startTime:'',
                              tennisCourt:'',
                              period:'',
                              hasHealthCondtion:false,
                              details:''};


  private userRegister:string = `${development.localhost}Authentication/Register`;
  private getAllTrainer:string = `${development.localhost}Trainer`;
  constructor(private http:HttpClient){}


  UserRegister()
  {
    let formdate = new FormData();
    formdate.append('email',this.request.email);
    formdate.append('firstName',this.request.firstName);
    formdate.append('lastName',this.request.lastName);
    formdate.append('password',this.request.password);
    formdate.append('nationalId',this.request.nationalId);
    formdate.append('image',this.request.image??'');
    formdate.append('city',this.request.city);
    formdate.append('phone',this.request.phone);
    formdate.append('gender',this.request.gender);
    //formdate.append('coachId',this.request.coachId);
    formdate.append('TennisExp',this.request.TennisExp);
    formdate.append('timeSession.Minutes',this.request.timeSession.Minutes.toString());
    formdate.append('timeSession.Hourse',this.request.timeSession.Hours.toString());
    formdate.append('timeSession.AmPm',this.request.timeSession.AmPm);
    formdate.append('tennisCourt',this.request.tennisCourt);
    formdate.append('period',this.request.period);
    formdate.append('trainerId',this.request.coachId);
    formdate.append('hasHealthCondtion',this.request.email);
    formdate.append('details',this.request.email);


    return this.http.post<GeneralResponse<RegisterResponse>>(this.userRegister,formdate);
  }

  GetAllTrainer()
  {
    return this.http.get<GeneralResponse<Trainer[]>>(this.getAllTrainer);
  }

}
