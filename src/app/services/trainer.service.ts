import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { development } from "src/environment";
import { Trainer } from "../model/trainer.model";
import { AuthService } from "../authentication/service/auth.service";
import { GeneralResponse } from "../shared/general.response";


@Injectable({
    providedIn:'root'
})
export class TrainerService{

    trainerId!:string;
    court!:string;

    private addTrainerAndCourt:string = `${development.localhost}Authentication/AddTrainerToUser`;
    private getSingleTrainer:string = `${development.localhost}Trainer/`
    constructor(private http:HttpClient,private authServ:AuthService){}

    AddTrainer()
    {
        return this.http.post<GeneralResponse<boolean>>(this.addTrainerAndCourt,{userId:this.authServ.user?.id,trainerId:this.trainerId});
    }

    GetSingleTrainer(id:string)
    {
        return this.http.get<GeneralResponse<Trainer>>(this.getSingleTrainer+id);
    }

}