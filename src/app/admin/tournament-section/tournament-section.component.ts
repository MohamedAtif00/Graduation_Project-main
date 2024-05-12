import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../service/tournament.service';
import { Tournament } from '../model/tournament.model';

@Component({
  selector: 'app-tournament-section',
  templateUrl: './tournament-section.component.html',
  styleUrls: ['./tournament-section.component.css']
})
export class TournamentSectionComponent implements OnInit{

  tournaments!:Tournament[];

  constructor(private tournamentServ:TournamentService){}


  ngOnInit(): void {
    this.GetTournaments()
  }

  GetTournaments()
  {
    this.tournamentServ.GetAllTournament().subscribe(data=>{
      console.log(data);
      if(data.value)
      this.tournaments = data.value
    })
  }



}
