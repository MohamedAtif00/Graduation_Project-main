import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-select-court',
  templateUrl: './select-court.component.html',
  styleUrls: ['./select-court.component.css']
})
export class SelectCourtComponent {

  constructor(private registServ:SignUpService,private router:Router){}

  Selected(court:string)
  {
    this.registServ.SetCourt(court);
    this.router.navigate(['select-trainer']);
  }

 
}
