import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { SignUpService } from 'src/app/services/sign-up.service';
interface Coach {
  trainerId:string,
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

interface rating{
  id:string,
  rating:string,
  username:string
}

@Component({
  selector: 'app-coach-one',
  templateUrl: './coach-one.component.html',
  styleUrls: ['./coach-one.component.css']
})
export class CoachOneComponent implements OnInit {
  bookingSuccess: boolean = false;

  ratings:rating[] = [];
  

  coach: Coach = {
    trainerId:'',
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


  constructor(private registerServ:SignUpService,private route:ActivatedRoute,private authServ:AuthService) { }

  ngOnInit(): void {
    let id =this.route.snapshot.params['id'];
    this.coach.trainerId = id

    this.registerServ.GetRatesForTrainer(id).subscribe(data=>{
      console.log(data);
      this.ratings = data.value;
    });

    this.registerServ.GetSingleTrainer(id).subscribe(data=>{
      console.log(data);
      if(data.value)
      {
        this.coach.imageUrl = this.getBase64Image(data.value.image)
        this.coach.name = data.value?.username??''
        this.coach.experience = data.value?.experience??0
        this.coach.age = this.calculateAge(data.value?.birthDate.toString()??'')
        this.coach.specialization = data.value.specialization
        this.coach.phone = data.value.phone
        this.coach.email = data.value.email
      }
    });

  }



  calculateAge(birthdate: string): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  Rating(rating:string)
  {
    this.registerServ.AddRating({trainerId:this.coach.trainerId,rating:rating,username:this.authServ.user?.username??''}).subscribe(data=>{
      console.log(data);
      if(data.errors.length == 0) alert('Rating Added')
      
    })
  }

  getBase64Image(image:File) {
    return 'data:image/jpeg;base64,' + image;
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

