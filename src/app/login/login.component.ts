import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  invalidLogin: boolean; 

  constructor() { }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
