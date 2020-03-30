import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../config';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidMailDirective } from '../directives/valid-mail.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private mailValid: ValidMailDirective
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email, this.mailValid] ],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public login(user: { mail: string, password: string }): void {
    console.log("name " + user.mail, "password " + user.password);
    this.router.navigate([`/${Routes.WORKSPACE}`]);
  }

}
