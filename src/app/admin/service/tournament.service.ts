import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GeneralResponse } from "src/app/shared/general.response";
import { development } from "src/environment";
import { Tournament } from "../model/tournament.model";


@Injectable({
    providedIn:'root'
})
export class TournamentService{

    private getAllTournament:string = `${development.localhost}Tournament`
    private addTournament:string = `${development.localhost}Tournament`

    constructor(private http:HttpClient){}

    GetAllTournament()
    {
        return this.http.get<GeneralResponse<Tournament[]>>(this.getAllTournament);
    }

    AddTournamnet(request:Tournament)
    {   
        return this.http.post<GeneralResponse<any>>(this.addTournament,request);
    }

}