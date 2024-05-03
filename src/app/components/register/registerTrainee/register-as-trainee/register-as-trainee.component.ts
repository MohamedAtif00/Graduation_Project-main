import { Component } from '@angular/core';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators ,FormControl  ,FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';
@Component({
  selector: 'app-register-as-trainee',
  templateUrl: './register-as-trainee.component.html',
  styleUrls: ['./register-as-trainee.component.css']
})
export class RegisterAsTraineeComponent {
 // Define class properties and imports

faUser = faUserPlus;
imageSrc = '../../../assets/image/avatar.png';
RegTrainee!: FormGroup;
submitted = false;
age!: number;

constructor(private fb: FormBuilder, private router: Router,private registerServ:SignUpService) {}

// Initialize the form with form controls and validators
ngOnInit() {
  this.RegTrainee = this.fb.group({
    profileImage:  ['../../../assets/image/avatar.png'],
    firstName:     ['', Validators.required],
    lastName:      ['', Validators.required],
    email:         ['', [Validators.required, Validators.email]],
    password:      ['', [Validators.required, Validators.minLength(6)]],
    date:          ['', Validators.required],
    idNumber:      ['', [Validators.required, Validators.pattern('[0-9]{14}')]],
    phoneNumber:   ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
    city:          ['Choose...', Validators.required],
    gender:        ['other', Validators.required],
  });
}

// Calculate age based on the provided date of birth
calculateAge(): void {
  const birthDateControl = this.RegTrainee.get('date');

  if (birthDateControl && birthDateControl.value) {
    const birthDate: Date = new Date(birthDateControl.value);
    const today: Date = new Date();
    const timeDiff = Math.abs(today.getTime() - birthDate.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

// Handle form submission
onSubmit() {
  this.submitted = true;

  if (this.RegTrainee.invalid) {
    return;
  }

  console.log(this.RegTrainee.value);
  this.router.navigate(['/regt']);

  // Display a success message
  const messageBox = document.createElement("div");
  messageBox.innerHTML = "Successful submission! :)";
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

  // Add information to register request

  this.registerServ.request.firstName = this.RegTrainee.value.firstName;
  this.registerServ.request.lastName = this.RegTrainee.value.lastName;
  this.registerServ.request.email = this.RegTrainee.value.email;
  this.registerServ.request.password = this.RegTrainee.value.password;
  //this.registerServ.request.image = this.RegTrainee.value.profileImage;
  this.registerServ.request.birthdate = this.RegTrainee.value.date;
  this.registerServ.request.nationalId = this.RegTrainee.value.idNumber.toString()
  this.registerServ.request.phone = this.RegTrainee.value.phoneNumber
  this.registerServ.request.city = this.RegTrainee.value.city
  this.registerServ.request.gender = this.RegTrainee.value.gender
}

// Handle file selection for the profile image
onFileSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    this.registerServ.request.image =file;
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log(reader);
    
  }
}



}
