import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { DonationService } from '../services/donation.service';
import { AuthService } from '../services/auth.service';
import { DonationRequest } from '../models/DonationRequest.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'bloodGroup', 'city', 'hospital', 'contact'];
  donationRequests: DonationRequest[];
  subscription: Subscription;
  dataSource: MatTableDataSource<DonationRequest>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private donationService: DonationService, 
    private authService: AuthService, private router: Router) {
      this.subscription = this.donationService.getDonations()
        .subscribe(donations => {
          this.donationRequests = donations;
          this.dataSource = new MatTableDataSource(donations);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToSubscriptions() {
    this.router.navigate(['/subscriptions']);
  }

  createDonation() {
    this.router.navigate(['/donation-form']);
  }
}