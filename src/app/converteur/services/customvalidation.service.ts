import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  binaryValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^[0-1]{1,}$');
      const valid = regex.test(control.value);
      console.log('binaryValidator', valid);
      
      return valid ? null : { invalidBinary : true };
    }
  }


}
