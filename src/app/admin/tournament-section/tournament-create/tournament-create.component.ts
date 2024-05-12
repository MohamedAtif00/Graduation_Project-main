import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../service/tournament.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTimepicker, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTimepickerMeridian }from './../../component/timepicker-meridian'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css'],
})
export class TournamentCreateComponent implements OnInit{

  gfg: Date = new Date(); 
  tournamentForm!:FormGroup;


  constructor(private tournamentServ:TournamentService,private fb:FormBuilder,private datePipe:DatePipe){}

  ngOnInit(): void {
    this.tournamentForm = this.fb.group({
      courtName:['',Validators.required],
      day:['',Validators.required],
      time:['',Validators.required]
    })
  }


  onSubmit()
  {
    // console.log(this.tournamentForm.value.time);
    console.log('Selected time:', this.tournamentForm.value.time.getHours(), this.tournamentForm.value.time.getMinutes());
    console.log(this.formatTime(this.tournamentForm.value.time.getHours(),this.tournamentForm.value.time.getMinutes()));
    console.log(this.getDayAndMonth(this.tournamentForm.value.day));
    this.tournamentServ.AddTournamnet({courtName:this.tournamentForm.value.courtName,day:this.getDayAndMonth(this.tournamentForm.value.day),time:this.formatTime(this.tournamentForm.value.time.getHours(),this.tournamentForm.value.time.getMinutes())}).subscribe(data=>{
      console.log(data);
      
    });
    
  }

  getDayAndMonth(date: Date): string {
    const day = this.datePipe.transform(date, 'dd');
    const month = this.datePipe.transform(date, 'MMMM');
    return `${day} ${month}`;
  }

  private formatTime(hour: number, minute: number): string {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
  }

}
