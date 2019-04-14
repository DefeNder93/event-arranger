import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() {}

  resetForm = (formGroup: FormGroup) => {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }
}
