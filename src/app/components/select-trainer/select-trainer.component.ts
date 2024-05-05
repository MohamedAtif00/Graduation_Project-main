import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/model/trainer.model';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-select-trainer',
  templateUrl: './select-trainer.component.html',
  styleUrls: ['./select-trainer.component.css']
})
export class SelectTrainerComponent implements OnInit{


  trainers!:Trainer[];
  constructor(private registerServ:SignUpService ,private router:Router){}

  ngOnInit(): void {
    this.registerServ.GetAllTrainer().subscribe(data=>{
      console.log(data);
      if(data.value)
      this.trainers = data.value
    });
  }

  getBase64Image(image:File) {
    return 'data:image/jpeg;base64,' + image;
  }

  Select(id:string)
  {
    this.registerServ.SetTrainer(id);
    this.router.navigate(['step1t']);
  }
}
