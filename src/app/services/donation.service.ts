import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { DonationRequest } from '../models/DonationRequest.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DonationService {
  private donationsUrl = 'http://localhost:8080/api/donations/requests';
  private bearerToken = 'Bearer '.concat(localStorage.getItem('token'));
  private contentType = 'application/json';
  private header = new Headers();

  constructor(private httpClient: HttpClient, private http: Http) { }

  /* getDonations(): Observable<DonationRequest[]> {
    let requestHeaders = new HttpHeaders();
    requestHeaders.set('Authorization', this.bearerToken);
    requestHeaders.set('Content-Type', this.contentType);

    return this.httpClient.get<DonationRequest[]>(this.donationsUrl, 
      { headers: requestHeaders }); */

  getDonations(): Observable<DonationRequest[]> {
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