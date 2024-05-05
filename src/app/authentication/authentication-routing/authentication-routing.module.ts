import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { RegisterComponent } from '../register/register.component';

const routes:Routes = [
  {path:'',component:StudentLoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:StudentLoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthenticationRoutingModule { }
