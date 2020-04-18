import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
	SignComponent
  ],
  imports: [
	FormsModule,
	CommonModule,
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