import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { CourtsComponent } from './components/courts/courts.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { LoginAsTraineeComponent } from './components/login/login-as-trainee/login-as-trainee.component';
import { RegisterAsTraineeComponent } from './components/register/registerTrainee/register-as-trainee/register-as-trainee.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileTraineeComponent } from './components/profile-trainee/profile-trainee.component';
import { RegisterAsTrainee2Component } from './components/register/registerTrainee/register-as-trainee2/register-as-trainee2.component';
import { CoachOneComponent } from './components/coaches/coach-one/coach-one.component';
import { SelectCourtComponent } from './components/select-court/select-court.component';
import { SelectTrainerComponent } from './components/select-trainer/select-trainer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TournamentsComponent } from './components/tournaments/tournaments.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourtsComponent,
    CoachesComponent,
    LoginAsTraineeComponent,
    RegisterAsTraineeComponent,
    ErrorsComponent,
    ForgetPasswordComponent,
    MenuComponent,
    FooterComponent,
    ProfileTraineeComponent,
    RegisterAsTrainee2Component,
    CoachOneComponent,
    SelectCourtComponent,
    SelectTrainerComponent,
    TournamentsComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
