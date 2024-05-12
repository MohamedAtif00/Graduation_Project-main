import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrainerSectionComponent } from './trainer-section/trainer-section.component';
import { TrainerDetailsComponent } from './trainer-section/trainer-details/trainer-details.component';
import { TrainerCreateComponent } from './trainer-section/trainer-create/trainer-create.component';
import { TournamentSectionComponent } from './tournament-section/tournament-section.component';
import { TournamentCreateComponent } from './tournament-section/tournament-create/tournament-create.component';
import { AdminCanActivate } from './gaurd/admin-canactivate.guard';


const routes:Routes = [
    {path:'',component:LoginComponent},
    {path:'trainer-section',component:TrainerSectionComponent,canActivate:[AdminCanActivate]},
    {path:'trainer-details/:id',component:TrainerDetailsComponent,canActivate:[AdminCanActivate]},
    {path:'trainer-create/:id',component:TrainerCreateComponent,canActivate:[AdminCanActivate]},
    {path:'trainer-create',component:TrainerCreateComponent,canActivate:[AdminCanActivate]},
    {path:'tournament',component:TournamentSectionComponent,canActivate:[AdminCanActivate]},
    {path:'tournament-create',component:TournamentCreateComponent,canActivate:[AdminCanActivate]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class AdminRoutingModule{}
