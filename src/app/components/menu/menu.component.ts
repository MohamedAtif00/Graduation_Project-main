import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) {}

  login(){
  this.router.navigate(['/logt']);
  }

  signup(){
      this.router.navigate(['/step1t']);
    }

    
}
