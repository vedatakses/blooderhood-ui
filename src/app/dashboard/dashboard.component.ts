import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { DonationService } from '../services/donation.service';
import { AuthService } from '../services/auth.service';
import { DonationRequest } from '../models/DonationRequest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns = ['id', 'bloodGroup', 'city', 'hospital', 'contact'];
  dataSource = new DonationDataSource(this.donationService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private donationService: DonationService, 
    private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
/*   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } */

  goToSubscriptions() {
    this.router.navigate(['/subscriptions']);
  }
}

export class DonationDataSource extends DataSource<any> {
  constructor(private donationService: DonationService) {
    super();
  }
  connect(): Observable<DonationRequest[]> {
    return this.donationService.getDonations();
  }
  disconnect() {}
}