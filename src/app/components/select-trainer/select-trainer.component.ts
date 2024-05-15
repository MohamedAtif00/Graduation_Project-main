import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Trainer } from 'src/app/model/trainer.model';
import { SignUpService } from 'src/app/services/sign-up.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-select-trainer',
  templateUrl: './select-trainer.component.html',
  styleUrls: ['./select-trainer.component.css']
})
export class SelectTrainerComponent implements OnInit{


  trainers!:Trainer[];
  constructor(private registerServ:SignUpService ,private router:Router,private trainerServ:TrainerService,private toastr:ToastrService){}

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
    // this.registerServ.SetTrainer(id);
    // this.router.navigate(['step1t']);
    this.trainerServ.trainerId = id;
    this.trainerServ.AddTrainer().subscribe(data=>{
      if(data.value)
        {
          this.toastr.success('Court And Trainer Added','success');
          this.router.navigate(['home']);
        }else{
          this.toastr.error('Something went wronge','Error');
        }
    })

  }
}
