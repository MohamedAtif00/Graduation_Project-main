import { HttpClient } from "@angular/common/http";
import { development } from "src/environment";
import { GetTournament, Tournament } from "../model/tournament.model";
import { GeneralResponse } from "../shared/general.response";
import { Injectable } from "@angular/core";
import { AuthService } from "../authentication/service/auth.service";



@Injectable({
    providedIn:'root'
})
export class TournamentService{

    private getAllTournament:string = `${development.localhost}Tournament`
    private addTournament:string = `${development.localhost}Tournament`
    private addUserToTournament:string = `${development.localhost}Tournament/AddUserToTournament`
    private getUserinTournament:string = `${development.localhost}Tournament/GetAllUsersForTournament/`

    constructor(private http:HttpClient,private authServ:AuthService){}

    GetAllTournament()
    {
        return this.http.get<GeneralResponse<GetTournament[]>>(this.getAllTournament);
    }

    AddTournamnet(request:Tournament)
    {   
        return this.http.post<GeneralResponse<any>>(this.addTournament,request);
    }

    AddUserToTournament(id:string,userId:string)
    {
        console.log('user',this.authServ.user);
        
        return this.http.post<GeneralResponse<any>>(this.addUserToTournament,{tournamentId:id,userId:userId});
    }

    GetAllUsersForTournamant(id:string)
    {
        return this.http.get<GeneralResponse<any>>(this.getUserinTournament+id);
    }

}