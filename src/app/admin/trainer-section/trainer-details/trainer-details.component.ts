import { Component, Input, OnInit } from '@angular/core';

import { TrainerService } from '../../service/trainer.service';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from '../../model/trainer.model';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.css']
})
export class TrainerDetailsComponent implements OnInit{
  
  coach!:Trainer;

  constructor(private trainerServ:TrainerService,private route:ActivatedRoute){}

  ngOnInit(): void {
    let id =  this.route.snapshot.params['id']

    this.trainerServ.GetSingleTrainer(id).subscribe(data=>{
      console.log(data);
      if(data.value)
      this.coach = data.value
    });
  }

  getAge(birthDateString: string): number {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  base64ToUrl(base64String: string): string {
    return 'data:image/png;base64,' + base64String;
  }

}
