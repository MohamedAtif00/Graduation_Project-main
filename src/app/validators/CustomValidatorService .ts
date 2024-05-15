import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { SignUpService } from '../services/sign-up.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor(private registerSrv:SignUpService,private tousterServ:ToastrService) { }


  validateDate(): AsyncValidatorFn {

    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      let startDayControl = control.get('startDate');
      let timeSessionControl = control.get('time');

      if (startDayControl && startDayControl.value && timeSessionControl && timeSessionControl.value) {
        const [hours, minutesWithAmPm] = timeSessionControl.value.split(':');
        const [minutes, AmPm] = minutesWithAmPm.split(' ');

        const request = {
          startDay: startDayControl.value as string,
          timeSession: {
            Hours: parseInt(hours, 10),
            Minutes: parseInt(minutes, 10),
            AmPm: AmPm as string
          }
        };

        return this.registerSrv.CheckDate(request).pipe(
          map(response => {

            if (response.value) {
              return null; // Validation successful, no errors
            } else {
                this.tousterServ.error("Choose another date", "Date UnAvaildable");
              return { invalidDate: true }; // Validation failed, return error object
            }
          }),
          catchError(() => of({ invalidDate: true })) // Handle errors from the HTTP request
        );
      } else {
        return of(null); // Form control values not set, no validation needed
      }
    };
  }


}
