import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { development } from 'src/environment';
import { GeneralResponse } from '../shared/general.response';
import { RegisterResponse } from '../model/response/register-response.model';
import { RegisterRequest } from '../model/request/register-request.model';
import { Trainer } from '../model/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  formdate = new FormData();
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
  private getSingleTrainer:string = `${development.localhost}Trainer/`;
  private rateTrainer:string = `${development.localhost}Trainer/RateTrainer`;
  private getRatesTrainer:string = `${development.localhost}Trainer/GetRatingsForTrainer/`;

  constructor(private http:HttpClient){

  }

  clear()
  {
    this.request.email = '';
    this.request.firstName = '';
    this.request.lastName = '';
    this.request.password = '';
    this.request.birthdate = new Date();
    this.request.nationalId = '';
    this.request.city = '';
    this.request.phone = '';
    this.request.gender = '';
    this.request.coachId = '';
    this.request.tennisCourt == '';
    this.request.timeSession ={Hours:2,Minutes:3,AmPm:''};
    this.request.startTime = '';
    this.request.tennisCourt = '';
    this.request.period = '';
    this.request.hasHealthCondtion =false;
    this.request.details = '';
  }


  UserRegister()
  {
    this.formdate = new FormData();
    this.formdate.append('email',this.request.email);
    this.formdate.append('firstName',this.request.firstName);
    this.formdate.append('lastName',this.request.lastName);
    this.formdate.append('password',this.request.password);
    this.formdate.append('nationalId',this.request.nationalId);
    this.formdate.append('image',this.request.image??'');
    this.formdate.append('city',this.request.city);
    this.formdate.append('phone',this.request.phone);
    this.formdate.append('gender',this.request.gender);
    //formdate.append('coachId',this.request.coachId);
    this.formdate.append('TennisExp',this.request.TennisExp);
    this.formdate.append('timeSession.Minutes',this.request.timeSession.Minutes.toString());
    this.formdate.append('timeSession.Hours',this.request.timeSession.Hours.toString());
    this.formdate.append('timeSession.AmPm',this.request.timeSession.AmPm);
    //this.formdate.append('tennisCourt',this.request.tennisCourt);
    this.formdate.append('period',this.request.period);
    //this.formdate.append('trainerId',this.request.coachId);
    this.formdate.append('hasHealthCondtion',this.request.email);
    this.formdate.append('details',this.request.email);


    return this.http.post<GeneralResponse<RegisterResponse>>(this.userRegister,this.formdate);
  }


  SetCourt(court:string)
  {
    this.formdate.append('tennisCourt',court);
  }

  SetTrainer(trainer:string)
  {
    this.formdate.append('trainerId',trainer);
  }

  GetAllTrainer()
  {
    return this.http.get<GeneralResponse<Trainer[]>>(this.getAllTrainer);
  }

  GetSingleTrainer(id:string)
  {
    return this.http.get<GeneralResponse<Trainer>>(this.getSingleTrainer+id);
  }

  AddRating(rating:{trainerId:string,rating:string,username:string })
  {
    return this.http.post<GeneralResponse<boolean>>(this.rateTrainer,rating)
  }

  GetRatesForTrainer(id:string)
  {
    return   this.http.get<any>(this.getRatesTrainer+id);
  }


}
