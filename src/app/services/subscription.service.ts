import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { UserSubscription } from '../models/UserSubscription.model';

@Injectable()
export class SubscriptionService {
  subscriptionsUrl = 'http://localhost:8080/api/notification/subscriptions';
  bearerToken = 'Bearer '.concat(localStorage.getItem('token'));
  contentType = 'application/json';
  header = new Headers();

  constructor(private http: Http) { }

  addSubscription(bloodGroup: string, city: string) {
    let params = new URLSearchParams();
    let userId = 'a0f989b7-c671-4c14-8ea0-0529834d03b7';
    let url = this.subscriptionsUrl + '/add?userId=' + userId +
      '&type=' + bloodGroup + '&location=' + city;
    let requestHeaders = new Headers();
    requestHeaders.set('Authorization', this.bearerToken);
    requestHeaders.set('Content-Type', this.contentType);

    let options = new RequestOptions({
      headers: requestHeaders,
    });

    return this.http.put(url, null, options);
  }

  getAllSubscriptions() {
    let params = new URLSearchParams();
    let userId = 'a0f989b7-c671-4c14-8ea0-0529834d03b7';
    let url = this.subscriptionsUrl + "?userId=" + userId;
    let requestHeaders = new Headers();
    requestHeaders.set('Authorization', this.bearerToken);
    requestHeaders.set('Content-Type', this.contentType);

    let options = new RequestOptions({
      headers: requestHeaders,
    });

    return this.http.get(url, options)
      .map(result => {
        return <any[]>result.json();
      })
  }

  removeSubscription(subscription: UserSubscription) {
    let url = this.subscriptionsUrl + '/remove/' + subscription.id;
    let requestHeaders = new Headers();
    requestHeaders.set('Authorization', this.bearerToken);
    requestHeaders.set('Content-Type', this.contentType);

    let options = new RequestOptions({
      headers: requestHeaders,
    });

    console.log('Deleting subscription url: ' + url);
    return this.http.put(url, null, options);
  }

}
