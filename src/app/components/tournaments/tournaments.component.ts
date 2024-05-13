import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { GetTournament, Tournament } from 'src/app/model/tournament.model';
import { TournamentService } from 'src/app/services/tournament.service';

interface user{
  firstName:string,
  secondName:string
}


@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent {



  tournaments:(GetTournament & {users:user[]})[] = [];

  constructor(private tournamentServ:TournamentService,private authServ:AuthService){}


  ngOnInit(): void {

    this.GetTournaments()
  }

  GetTournaments()
  {
    this.tournamentServ.GetAllTournament().subscribe((tournament)=>{
      console.log(tournament);
      if(tournament.value)
      tournament.value.forEach(e=>{
        this.GetUsersForTournament(e)
      })
    })
  }

  GetUsersForTournament(e:GetTournament)
  { 
    this.tournamentServ.GetAllUsersForTournamant(e.id.value).subscribe(users=>{
          console.log(users);
          let usersArray:user[] = users.value; 
          this.tournaments.push({id:{value:e.id.value},courtName:e.courtName,day:e.day,time:e.time,users:users.value})
          console.log('end',this.tournaments);
          
        })
  }

  Book(e:GetTournament)
  {
    this.authServ.AllowAccessToken().subscribe(data=>{
      console.log();
      if(data)
      this.tournamentServ.AddUserToTournament(e.id.value,data?.userId).subscribe(data=>{
        console.log(data);
        alert('booked')
  
      })
    })
  }



}
