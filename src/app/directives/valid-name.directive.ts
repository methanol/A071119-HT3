import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidNameDirective,
      multi: true
    }
  ]
})
export class ValidNameDirective {

  public validate({value}: FormControl): ValidationErrors | null {
    const valid: boolean = /(^[A-Z])[a-z]+/g.test(value);
    return valid
      ? null
      : {
        wrongName: 'first/last names should only contain letters and start with capital'
      };
  }

}
