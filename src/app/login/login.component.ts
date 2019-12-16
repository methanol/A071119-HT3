import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  public login(user: { mail: string, password: string }): void {
    console.log("name " + user.mail, "password " + user.password);
    this.router.navigate([`/${Routes.WORKSPACE}`]);
  }

}
