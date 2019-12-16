import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../config';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css', '../app.component.css']
})
export class SignComponent {

  constructor(private router: Router) { }

  private firstPass: string;
  private secondPass: string;

  public setPass(pass: string):void {
    this.firstPass = pass
  }

  public confirmPass(pass: string):void {
    this.secondPass = pass
  }

  public get primaryPass() {
    return this.firstPass;
  }

  public get secondaryPass() {
    return this.secondPass;
  }

  public login(user: { fname: String, lname: String, mail: String, pass: String }): void {
    console.log(user);
    this.router.navigate([`/${Routes.WORKSPACE}`]);
  }

}
