import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourtsComponent } from './components/courts/courts.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { LoginAsTraineeComponent } from './components/login/login-as-trainee/login-as-trainee.component';
import { RegisterAsTraineeComponent } from './components/register/registerTrainee/register-as-trainee/register-as-trainee.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterAsTrainee2Component } from './components/register/registerTrainee/register-as-trainee2/register-as-trainee2.component';
import { ProfileTraineeComponent } from './components/profile-trainee/profile-trainee.component';
import { CoachOneComponent } from './components/coaches/coach-one/coach-one.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',     component:HomeComponent},
  {path:'coaches',  component:CoachesComponent},
  {path:'courts',   component:CourtsComponent},
  {path:'logt',     component:LoginAsTraineeComponent},
  {path:'forget',   component:ForgetPasswordComponent},
  {path:'step1t',     component:RegisterAsTraineeComponent},
  {path:'regt',     component:RegisterAsTrainee2Component},
  {path:'profileT',     component:ProfileTraineeComponent},
  {path:'details',    component:CoachOneComponent},


  {path:'**',       component:ErrorsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
