import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainerSectionComponent } from './trainer-section/trainer-section.component';
import { TrainerCreateComponent } from './trainer-section/trainer-create/trainer-create.component';
import { TrainerDetailsComponent } from './trainer-section/trainer-details/trainer-details.component';
import { TournamentSectionComponent } from './tournament-section/tournament-section.component';
import { TournamentCreateComponent } from './tournament-section/tournament-create/tournament-create.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';







@NgModule({
  declarations: [
    LoginComponent,
    TrainerSectionComponent,
    TrainerCreateComponent,
    TrainerDetailsComponent,
    TournamentSectionComponent,
    TournamentCreateComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot()
  ],providers:[DatePipe]

})
export class AdminModule { }
