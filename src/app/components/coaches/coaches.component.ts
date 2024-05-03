import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent{
  constructor(private router: Router) {}

  navigateToCoach() {
    // Check the coachId and navigate accordingly

        // Navigate to details for Coach 1
        this.router.navigate(['/details']);

  }
}

