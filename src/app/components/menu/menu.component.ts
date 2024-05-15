import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {



  constructor(private router: Router,public authServ:AuthService) {}

  login(){
  this.router.navigate(['/logt']);
  }

  signup(){
      // this.router.navigate(['/step1t']);
      this.router.navigate(['step1t']);
    }

  signout()
  {
    this.authServ.Logout();
    this.router.navigate(['home']);
  }

    
}
