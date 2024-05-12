import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../service/trainer.service';
import { Trainer } from '../model/trainer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-section',
  templateUrl: './trainer-section.component.html',
  styleUrls: ['./trainer-section.component.css']
})
export class TrainerSectionComponent implements OnInit{

  trainers!:Trainer[]
  constructor(private trainerServ:TrainerService,private router:Router){}


  ngOnInit(): void {
      this.GetTrrainers()
  }

  GetTrrainers()
  {
    this.trainerServ.GetAllTrainers().subscribe(data=>{
      console.log(data);
      if(data.value)
      this.trainers = data.value
    console.log(this.trainers);
    
    })
  }

  DeleteTrainer(trainer:Trainer)
  {
      this.trainerServ.DeletTrainer(trainer.id.value).subscribe(data=>{
        alert(`${trainer.username} has been deleted`);
        this.GetTrrainers()
      });
  }


  base64ToUrl(base64String: string): string {
    return 'data:image/png;base64,' + base64String;
  }

}
