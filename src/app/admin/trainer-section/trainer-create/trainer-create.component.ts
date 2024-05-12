import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TrainerService } from '../../service/trainer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PostCreateTrainer, PostUpdateTrainer, Trainer } from '../../model/trainer.model';

@Component({
  selector: 'app-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.css']
})
export class TrainerCreateComponent implements OnInit{

  trainer!:Trainer;
  // postTrainer!:PostTrainer;
  trainerForm!: FormGroup;
  imageSrc = '../../../assets/image/avatar.png';
  id!:string;
  file!:File;

  constructor(private formBuilder: FormBuilder,private trainerServ:TrainerService,private route:ActivatedRoute,private datePipe:DatePipe,private router:Router) { }

  ngOnInit(): void {

    this.id =  this.route.snapshot.params['id']

    if(this.id)
    {
      this.trainerServ.GetSingleTrainer(this.id).subscribe(data=>{
        console.log(data);
        if(data.value)
        this.trainer = data.value
  
        this.imageSrc = this.base64ToUrl(this.trainer.image)
      this.trainerForm = this.formBuilder.group({
        username: [this.trainer.username, Validators.required],
        birthDate: [this.getYearMonthDay(this.trainer.birthDate), Validators.required],
        experience: [this.trainer.experience, Validators.required],
        specialization: [this.trainer.specialization, Validators.required],
        phone: [this.trainer.phone, Validators.required],
        email: [this.trainer.email, [Validators.required, Validators.email]],
  
      });
  
  
      });

    }else
    {
      this.trainerForm = this.formBuilder.group({
        username: ['', Validators.required],
        birthDate: ['', Validators.required],
        experience: ['', Validators.required],
        specialization: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
  
      });
    }

  }

  base64ToUrl(base64String: string): string {
    return 'data:image/png;base64,' + base64String;
  }


  base64toFile(base64String: string): File {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new File([byteArray], 'image', { type: 'image/png' }); // Change the type according to your file type
  }


  getYearMonthDay(dateString: string) {
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;

      };
      reader.readAsDataURL(this.file);
      console.log(reader);
      
    }
  }

  onSubmit() {
    // Form submission logic
    if (this.trainerForm.valid) {
      // const trainer: Trainer = this.trainerForm.value;
      // console.log(trainer);
      // Perform further actions like saving the trainer
      if(this.id)
      {
        console.log(this.file);
        
        this.trainerServ.UpdateTrainer({id:this.trainer.id.value,
                                        username:this.trainerForm.value.username,
                                        birthDate:this.trainerForm.value.birthDate,
                                        experience:this.trainerForm.value.experience,
                                        specialization:this.trainerForm.value.specialization,
                                        phone:this.trainerForm.value.phone,
                                        email:this.trainerForm.value.email,
                                        image:this.file??this.base64toFile(this.trainer.image)}).subscribe(data=>{
                                          console.log(data);
                                          this.router.navigate(['admin','trainer-section']);
                                        });
      }else
      {
        this.trainerServ.AddTrainer({
                                    username:this.trainerForm.value.username,
                                    birthDate:this.trainerForm.value.birthDate,
                                    experience:this.trainerForm.value.experience,
                                    specialization:this.trainerForm.value.specialization,
                                    phone:this.trainerForm.value.phone,
                                    email:this.trainerForm.value.email,
                                    image:this.file}).subscribe(data=>{
                                      console.log(data);
                                      this.router.navigate(['admin','trainer-section']);
                                      
                                    })
      }


    } else {
      // Form is invalid
    }
  }

}
