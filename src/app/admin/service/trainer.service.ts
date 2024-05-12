import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


import { GeneralResponse } from "src/app/shared/general.response";
import { development } from "src/environment";
import { PostCreateTrainer, PostUpdateTrainer, Trainer } from "../model/trainer.model";


@Injectable({
    providedIn:'root'
})
export class TrainerService{

    private getAllTrainer:string = `${development.localhost}Trainer`;
    private getSingleTrainer:string = `${development.localhost}Trainer/`;
    private deleteTrainer:string = `${development.localhost}Trainer/`;
    private addTrainer:string = `${development.localhost}Trainer/AddTrainer`;
    private updateTrainer:string = `${development.localhost}Trainer/UpdateTrainer`;


    constructor(private http:HttpClient){}


    GetAllTrainers()
    {
        return this.http.get<GeneralResponse<Trainer[]>>(this.getAllTrainer);
    }

    GetSingleTrainer(id:string)
    {
        return this.http.get<GeneralResponse<Trainer>>(this.getSingleTrainer+id);
    }

    AddTrainer(trainer:PostCreateTrainer)
    {
        let form = new FormData()
        form.append('username',trainer.username);
        form.append('birthdate',trainer.birthDate);
        form.append('exp',trainer.experience.toString());
        form.append('specia',trainer.specialization);
        form.append('phone',trainer.phone);
        form.append('email',trainer.email);
        form.append('image',trainer.image);

        return this.http.post<any>(this.addTrainer,form);
    }

    UpdateTrainer(trainer:PostUpdateTrainer)
    {
        let form = new FormData()
        form.append('id',trainer.id);
        form.append('username',trainer.username);
        form.append('birthdate',trainer.birthDate);
        form.append('exp',trainer.experience.toString());
        form.append('specia',trainer.specialization);
        form.append('phone',trainer.phone);
        form.append('email',trainer.email);
        form.append('image',trainer.image);

        return   this.http.post<any>(this.updateTrainer,form);
    }

    DeletTrainer(id:string)
    {
        return this.http.delete<GeneralResponse<any>>(this.deleteTrainer+id);
    }

}