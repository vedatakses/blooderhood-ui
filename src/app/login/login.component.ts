import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Http, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  invalidLogin: boolean;
  private tokenUrl = "http://localhost:8080/oauth/token";

  constructor(private http: Http, private router: Router) {

  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  signIn(params: HTMLFormElement) {
    let userDetails = {
      grant_type: 'password',
      username: params.username,
      password: params.password
    }

    let header = new Headers();
    header.append('Authorization', 'Basic Ymxvb2Rlckhvb2RBcHA6TWFZemtTam1relBDNTdM');
    header.append('Content-Type', undefined);

    let options = new RequestOptions({
      headers: header,
      params: userDetails
    });

    this.http.post(this.tokenUrl, null, options)
    .subscribe(response => {
      if (response.status == 200) {
        let result = response.json();
        if (result && result.access_token) {
          localStorage.setItem('token', result.access_token);
          //this.router.navigate(['/dashboard']);
        }
      } else {
        this.router.navigate(['/error']);
      }
    });

  }
}
