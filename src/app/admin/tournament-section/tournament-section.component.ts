import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../service/tournament.service';
import { GetTournament, Tournament } from '../model/tournament.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tournament-section',
  templateUrl: './tournament-section.component.html',
  styleUrls: ['./tournament-section.component.css']
})
export class TournamentSectionComponent implements OnInit{

  tournaments!:GetTournament[];

  constructor(private tournamentServ:TournamentService,private toastr:ToastrService){}


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

  Delete(item:GetTournament)
  {
    this.tournamentServ.Delete(item).subscribe(data=>{
      if(data)
        {
          this.toastr.success('tournament deleted','success');
          this.tournamentServ.GetAllTournament().subscribe(data=>{
            if(data.value)
            this.tournaments = data.value
          })
        }
    })
  }

}
