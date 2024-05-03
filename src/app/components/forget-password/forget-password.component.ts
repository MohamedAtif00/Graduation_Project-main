import { Component } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  faLock =faLock ;

}
