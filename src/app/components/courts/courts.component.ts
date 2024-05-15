import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { SignUpService } from 'src/app/services/sign-up.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.css']
})
export class CourtsComponent {



  constructor(private registerServ:SignUpService,private router:Router,public authServ:AuthService,private trainerServ:TrainerService){}

  Selected(type:string)
  {
    //this.registerServ.SetCourt(type);
    this.trainerServ.trainerId = ''
    this.trainerServ.court = type;
    this.router.navigate(['select-trainer']);
  }

}
