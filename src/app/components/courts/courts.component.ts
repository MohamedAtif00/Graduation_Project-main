import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.css']
})
export class CourtsComponent {



  constructor(private registerServ:SignUpService,private router:Router,public authServ:AuthService){}

  Selected(type:string)
  {
    this.registerServ.SetCourt(type);

    this.router.navigate(['select-trainer']);
  }

}
