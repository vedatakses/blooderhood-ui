import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Http, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  private usersUrl = "http://localhost:8080/api/users";

  constructor(private http: Http, private router: Router) {

  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  signUp(params: HTMLFormElement) {
    let user = {
      username: params.username,
      email: params.email,
      password: params.password
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log(JSON.stringify(user));
    console.log(this.usersUrl);

    this.http.post(this.usersUrl, JSON.stringify(user), {
      headers: headers
    }).subscribe(response => {
      if (response.status == 201) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });

  }
}
