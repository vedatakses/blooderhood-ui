import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private usersUrl = 'http://localhost:8080/api/users';
  private tokenUrl = 'http://localhost:8080/oauth/token';
  private basicToken = 'Basic Ymxvb2Rlckhvb2RBcHA6TWFZemtTam1relBDNTdM';

  constructor(private http: Http, private router: Router) { }

  login(userDetails: any) {
    let header = new Headers();
    header.append('Authorization', this.basicToken);
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
            this.router.navigate(['/dashboard']);
          }
        } else {
          this.router.navigate(['/error']);
        }
      });
  }

  getUserId(username) {
    let header = new Headers();
    header.append('Authorization', this.basicToken);
    header.append('Content-Type', undefined);

    let options = new RequestOptions({
      headers: header
    });

    let userIdUrl = this.usersUrl + '/find?username=' + username;
    this.http.get(userIdUrl, options).subscribe(response => {
      if (response.status == 200) {
        let userId = response.text();
        if (response) {
          console.log('inside result check');
          localStorage.setItem('userId', userId);
        }
      }
    });
  }

  signUp(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
