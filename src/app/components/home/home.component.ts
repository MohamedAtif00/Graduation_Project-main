import { Component, OnInit } from '@angular/core';
import { GetTournament } from 'src/app/model/tournament.model';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  tournaments!:GetTournament[];

  constructor(private tournamentServ:TournamentService){}

  ngOnInit(): void {
    this.GetTournaments()
  }

  GetTournaments()
    {
      this.tournamentServ.GetAllTournament().subscribe((tournament)=>{
        console.log(tournament);
        if(tournament.value)
        this.tournaments = tournament.value
      })
    }

}
