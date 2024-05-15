import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { Trainee } from 'src/app/model/trainee.model';
import { SignUpService } from 'src/app/services/sign-up.service';
import { TrainerService } from 'src/app/services/trainer.service';


@Component({
  selector: 'app-profile-trainee',
  templateUrl: './profile-trainee.component.html',
  styleUrls: ['./profile-trainee.component.css']
})
export class ProfileTraineeComponent implements OnInit {

  trainee!:Trainee;
  trainerName!:string;
  constructor(private authServ:AuthService,private trainerServ:TrainerService){}

  ngOnInit(): void {
    this.authServ.AllowAccessToken().subscribe(data1=>{
      console.log(data1);
      if(data1)
      {
        this.authServ.GetUserInformation(data1.userId).subscribe((data2:any)=>{
          console.log(data2);
          
          if(data2.value)
          this.trainee = data2.value
          console.log('infomation',data2.value);

          this.trainerServ.GetSingleTrainer(data2.value?.trainerId.value).subscribe(trainer=>{
            if(trainer.value)
              {
                this.trainerName = trainer.value.username
              }
          })

        })
      }
    })
  }



  getBase64Image(image:File) {
    return 'data:image/jpeg;base64,' + image;
  }



}