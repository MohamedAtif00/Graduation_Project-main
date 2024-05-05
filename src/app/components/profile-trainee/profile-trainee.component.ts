import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { Trainee } from 'src/app/model/trainee.model';
import { SignUpService } from 'src/app/services/sign-up.service';


@Component({
  selector: 'app-profile-trainee',
  templateUrl: './profile-trainee.component.html',
  styleUrls: ['./profile-trainee.component.css']
})
export class ProfileTraineeComponent implements OnInit {

  trainee!:Trainee;

  constructor(private authServ:AuthService){}

  ngOnInit(): void {
    this.authServ.AllowAccessToken().subscribe(data1=>{
      console.log(data1);
      if(data1)
      {
        this.authServ.GetUserInformation(data1.userId).subscribe(data2=>{
          console.log(data2);
          
          if(data2.value)
          this.trainee = data2.value
          console.log('infomation',data2.value);

          

        })
      }
    })
  }



  getBase64Image(image:File) {
    return 'data:image/jpeg;base64,' + image;
  }



}