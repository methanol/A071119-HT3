import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ValidMailDirective } from '../directives/valid-mail.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
	SignComponent,
	//ValidMailDirective
  ],
  imports: [
	FormsModule,
	CommonModule,
	ReactiveFormsModule,
	SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignComponent
      }
    ])
  ]
})

export class SignModule { }