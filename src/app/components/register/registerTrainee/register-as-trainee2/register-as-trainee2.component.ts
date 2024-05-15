import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralResponse } from '../../../../shared/general.response';
import { Trainer } from 'src/app/model/trainer.model';
import { SignUpService } from 'src/app/services/sign-up.service';
import { Observable, of, delay, map } from 'rxjs';
import { CustomValidatorService } from 'src/app/validators/CustomValidatorService ';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-as-trainee2',
  templateUrl: './register-as-trainee2.component.html',
  styleUrls: ['./register-as-trainee2.component.css']
})
export class RegisterAsTrainee2Component {
// Component Variables
title_coach = "Coach";
title_trainee = "Trainee";
submitted = false;
medicalCondition!: string;
medicalDetails!: string;
trainingForm!: FormGroup;

trainers!:Trainer[];
// Constructor
constructor(private fb: FormBuilder, 
            private router: Router,
            private registerServ:SignUpService,
            private http:HttpClient,
            private validator:CustomValidatorService,
             private tousterServ:ToastrService) {}

// Initialize the form with form controls and validators
ngOnInit() {
  this.http.get<GeneralResponse<Trainer[]>>('https://localhost:7032/api/Trainer').subscribe(data=>{
    console.log(data);
    if(data.value)
    this.trainers = data.value
  })

  this.trainingForm = this.fb.group({
    experience:  ['', Validators.required],
    // coach:       ['', Validators.required],
    startDate:   ['', Validators.required],
    time:        ['', Validators.required],
    period:      ['', (Validators.required)],
    // court:       ['', Validators.required],
    medical:     ['', Validators.required],
    medicalDetails: [''],
  }, { asyncValidators: [this.validator.validateDate()] }

);

  this.trainingForm.statusChanges.subscribe(status =>{
    if (status === 'INVALID') {
      const startDateErrors = this.trainingForm.get('startDate')?.errors;
      if (startDateErrors?.['invalidDate']) {
        this.tousterServ.error('Choose another date', 'Date Unavailable');
      }
    }
  })



}

// Form Submission
onSubmit() {
  // Handle your form submission
  debugger;
  console.log(this.trainingForm);
  
  this.submitted = true;
  if (this.trainingForm.invalid) {
    return;
  }
  console.log(this.trainingForm.value);
  this.router.navigate(['/profileT']);

  // Successful submission message
  const messageBox = document.createElement("div");
  messageBox.innerHTML = "Successful Sign Up! :)";
  messageBox.style.backgroundColor = "#4CAF50";
  messageBox.style.color = "white";
  messageBox.style.padding = "10px";
  messageBox.style.position = "fixed";
  messageBox.style.top = "50%";
  messageBox.style.left = "50%";
  messageBox.style.transform = "translate(-50%, -50%)";
  messageBox.style.zIndex = "9999";
  document.body.appendChild(messageBox);

  // Hide the message box after 3 seconds
  setTimeout(function () {
    messageBox.style.display = "none";
  }, 3000);

  // Add this information to request

  //splite time
  let [houre,minutes] =  this.trainingForm.value.time.split(':');
  let AmPm = minutes.split(' ')[1]
  this.registerServ.request.timeSession.Hours = parseInt(houre) 
  this.registerServ.request.timeSession.Minutes = parseInt(minutes) 
  this.registerServ.request.timeSession.AmPm = AmPm


  //this.registerServ.request.coachId = this.trainingForm.value.coach
  this.registerServ.request.startTime = this.trainingForm.value.startDate
 // this.registerServ.request.selectedTime = this.trainingForm.value.time
  this.registerServ.request.TennisExp = this.trainingForm.value.experience
  this.registerServ.request.period =this.trainingForm.value.period
  //this.registerServ.request.tennisCourt = this.trainingForm.value.court.split(' ')[0]
  this.registerServ.request.hasHealthCondtion = this.trainingForm.value.medical == 'no'?false:true;
  this.registerServ.request.details = this.trainingForm.value.medicalDetails

  console.log('register',this.registerServ.request);
  debugger;

  this.registerServ.UserRegister().subscribe(data=>{
    console.log(data);
    this.router.navigate(['home']);
    // this.tousterServ.success('Sign Up Successfull');
  });


}

// Medical Condition Change Event
onMedicalConditionChange() {
  this.medicalCondition = this.trainingForm.get('medical')!.value;
  const medicalDetailsControl = this.trainingForm.get('medicalDetails');

  if (this.medicalCondition === 'no' && medicalDetailsControl) {
    medicalDetailsControl.clearValidators();
  } else if (this.medicalCondition === 'yes' && medicalDetailsControl) {
    medicalDetailsControl.setValidators([Validators.required]);
  }

  medicalDetailsControl!.updateValueAndValidity();

}


// validate(control: AbstractControl): Observable<ValidationErrors | null> {
//   // Simulate an HTTP request
//   let startDay = control.get('startDate');
//   let timeSession = control.get('time');

//   if(startDay?.value && timeSession?.value)
//     {
//       let [houre,minutes] =  timeSession?.value.split(':');
//       let AmPm = minutes.split(' ')[1]
    
//       const request = {startDay:<string>(startDay.value),timeSession:{Hours:parseInt(houre),Minutes:parseInt(minutes),AmPm:<string>AmPm}}

//       return this.registerServ.CheckDate(request).pipe(
//         map(data=>{
//           if(data.value)
//             {
//               return of(true);
//             }else
//             {
//               return of(false)
//             }
//         })
//       )

//     }
//     return of(null);
// }

}

