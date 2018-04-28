import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { DonationRequest } from '../models/DonationRequest.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DonationService {
  donationsUrl = 'http://localhost:8080/api/donations/requests';
  bearerToken = 'Bearer '.concat(localStorage.getItem('token'));
  contentType = 'application/json';
  header = new Headers();

  constructor(private httpClient: HttpClient, private http: Http) { }

  getDonations() {
    var count = 0;
    let reqHeader = new Headers();
    reqHeader.append('Authorization', this.bearerToken);
    reqHeader.append('Content-Type', undefined);
    
    let options = new RequestOptions({
        headers: reqHeader,
    });
    
    return this.http.get(this.donationsUrl, options)
    .map(result => {
      const items = <any[]>result.json();
      items.forEach(item => item.id = ++count);
      return items;
    })
  }
}