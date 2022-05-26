import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appBinaryValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting : BinaryValidatorDirective,
    multi: true 
  }]
})
export class BinaryValidatorDirective implements Validator {

  constructor(private customValidator : CustomvalidationService) { }
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.customValidator.binaryValidator()(control)
  }
}
