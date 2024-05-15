import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/model/trainer.model';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit{

  searchQuery!:number;
  searchExp!:number;
  trainers!:Trainer[];
  constructor(private router: Router,private registerServ:SignUpService) {}

  ngOnInit(): void {
    this.registerServ.GetAllTrainer().subscribe(data=>{
      console.log(data);
      if(data.value)
      this.trainers = data.value
    })
  }

  getBase64Image(image:File) {
    return 'data:image/jpeg;base64,' + image;
  }


  navigateToCoach(id:string) {
    // Check the coachId and navigate accordingly

        // Navigate to details for Coach 1
        this.router.navigate(['/details',id]);

  }

  onSearchQueryChange()
  {

  }
}

