import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidMailDirective } from '../directives/valid-mail.directive';
import { ValidNameDirective } from '../directives/valid-name.directive';


@NgModule({
  declarations: [ValidMailDirective, ValidNameDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ValidMailDirective,
    ValidNameDirective
  ]
})
export class SharedModule { }
