import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from 'src/app/services/sign-up.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-select-court',
  templateUrl: './select-court.component.html',
  styleUrls: ['./select-court.component.css']
})
export class SelectCourtComponent {

  constructor(private registServ:SignUpService,private router:Router,private trainerServ:TrainerService,private toastr:ToastrService){}

  Selected(court:string)
  {
    //this.registServ.SetCourt(court);
    //this.router.navigate(['select-trainer']);
    this.trainerServ.court = court;
    this.trainerServ.AddTrainer().subscribe(data=>{
      if(data.value)
      {
        this.toastr.success('trainer And Court Added','success');
        this.router.navigate(['home']);
      }else{
        this.toastr.error('Something went wrong','error');
      }
    });
  }

 
}
