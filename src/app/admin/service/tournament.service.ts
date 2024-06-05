import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GeneralResponse } from "src/app/shared/general.response";
import { development } from "src/environment";
import { GetTournament, Tournament } from "../model/tournament.model";


@Injectable({
    providedIn:'root'
})
export class TournamentService{

    private getAllTournament:string = `${development.localhost}Tournament`
    private addTournament:string = `${development.localhost}Tournament`
    private deleteTournament:string = `${development.localhost}Tournament/`

    constructor(private http:HttpClient){}

    GetAllTournament()
    {
        return this.http.get<GeneralResponse<GetTournament[]>>(this.getAllTournament);
    }

    AddTournamnet(request:Tournament)
    {   
        return this.http.post<GeneralResponse<any>>(this.addTournament,request);
    }

    Delete(item:GetTournament)
    {
        return this.http.delete<any>(this.deleteTournament+item.id.value);
    }

}