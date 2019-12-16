import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidMail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidMailDirective,
      multi: true
    }
  ]
})

export class ValidMailDirective implements Validator {

  public validate({value}: FormControl): ValidationErrors | null {
    const valid: boolean = /[\w-]+@(\w+\.)+[a-z]+/g.test(value);
    return valid
      ? null
      : {
        wrongMail: 'please check your email, current address is incorrect'
      };
  }

}
