import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DonationRequest } from '../models/DonationRequest.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DonationService {
  donationsUrl = 'http://localhost:8080/api/donations/requests';
  bearerToken = 'Bearer '.concat(localStorage.getItem('token'));
  contentType = 'application/json';
  header = new Headers();

  constructor(private http: Http) { }

  getDonations() {
    var count = 0;
    let reqHeader = new Headers();
    reqHeader.append('Authorization', this.bearerToken);
    reqHeader.append('Content-Type', this.contentType);
    
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

  createDonation(donation) {
    let url = this.donationsUrl + '/requests';
    var count = 0;
    let reqHeader = new Headers();
    reqHeader.append('Authorization', this.bearerToken);
    reqHeader.append('Content-Type', this.contentType);
    
    let options = new RequestOptions({
        headers: reqHeader,
    });
    console.log('Inside donation service - createDonation method');
    console.log(url);
    return this.http.post(url, donation, options);
  }
}