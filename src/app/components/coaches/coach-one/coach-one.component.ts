import { Component, OnInit } from '@angular/core';
interface Coach {
  name: string;
  jobTitle: string;
  description: string;
  age: number;
  experience: number;
  specialization: string;
  phone: string;
  email: string;
  imageUrl : string ;
}



@Component({
  selector: 'app-coach-one',
  templateUrl: './coach-one.component.html',
  styleUrls: ['./coach-one.component.css']
})
export class CoachOneComponent implements OnInit {
  bookingSuccess: boolean = false;

  coach: Coach = {
    imageUrl: '../../../assets/image/coach-02.jpg',
    name: 'Kelley Miles',

    jobTitle: 'Trainer',
    description: 'Sed aliquam euismod ipsum non vestibulum. In eget varius leo, eget iaculis enim. Praesent vitae est leo. Nunc eget ipsum volutpat, tristique massa sit amet, faucibus augue. Aliquam erat volutpat. Praesent sed nisl nec neque pretium condimentum.',
    age: 28,
    experience: 4,
    specialization: 'Engineer',
    phone: '803-33-5644-99',
    email: 'contact.name@your-company.com'
  };


  constructor() { }

  ngOnInit(): void {
  }

  bookCoach() {
   // Implement booking logic here
  console.log('Booking with coach:', this.coach.name);
   // Example: Simulate booking success
  this.bookingSuccess = true;

     // Hide success message after 3 seconds
    setTimeout(() => {
      this.bookingSuccess = false;
    }, 3000);
  }

}

