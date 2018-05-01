import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SubscriptionService } from '../services/subscription.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { UserSubscription } from '../models/UserSubscription.model';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnDestroy {
  subscription: Subscription;
  userSubscriptions: UserSubscription[];
  bloodGroup: string;
  city: string;
  deletingSubscription: UserSubscription;

  constructor(private authService: AuthService,
    private router: Router,
    private subscriptionService: SubscriptionService) {
    this.subscription = this.getAllUserSubscriptions();
  }

  getAllUserSubscriptions() {
    return this.subscriptionService.getAllSubscriptions()
    .subscribe(userSubscriptions => {
      this.userSubscriptions = userSubscriptions;
    });
  }

  goToHome() {
    this.router.navigate(['/dashboard']);
  }

  add() {
    if (this.bloodGroup != undefined && this.city != undefined) {
      console.log('Adding subscription with bloodGroup: ' + this.bloodGroup + ' and city: ' + this.city);
      this.subscriptionService.addSubscription(this.bloodGroup, this.city)
        .subscribe(res => {
          console.log(res);
          this.subscription = this.getAllUserSubscriptions();
        });
    }
  }

  delete() {
    console.log(this.deletingSubscription);
    if (this.deletingSubscription.id != undefined) {
      console.log('Removing subsctiption with id: ' + this.deletingSubscription.id);
      this.subscriptionService.removeSubscription(this.deletingSubscription)
        .subscribe(res => {
          console.log(res);
          this.subscription = this.getAllUserSubscriptions();
        });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  bloodGroups = [
    { value: 'A RH (+)' },
    { value: 'A RH (-)' },
    { value: 'B RH (+)' },
    { value: 'B RH (-)' },
    { value: '0 RH (+)' },
    { value: '0 RH (-)' },
    { value: 'AB RH (+)' },
    { value: 'AB RH (-)' },
  ];

  cities = [
    { value: 'ADANA' }, { value: 'ADIYAMAN' }, { value: 'AFYON' }, { value: 'AĞRI' },
    { value: 'AMASYA' }, { value: 'ANKARA' }, { value: 'ANTALYA' }, { value: 'ARTVİN' },
    { value: 'AYDIN' }, { value: 'BALIKESİR' }, { value: 'BİLECİK' }, { value: 'BİNGÖL' },
    { value: 'BİTLİS' }, { value: 'BOLU' }, { value: 'BURDUR' }, { value: 'BURSA' },
    { value: 'ÇANAKKALE' }, { value: 'ÇANKIRI' }, { value: 'ÇORUM' }, { value: 'DENİZLİ' },
    { value: 'DİYARBAKIR)' }, { value: 'EDİRNE' }, { value: 'ELAZIĞ' }, { value: 'ERZİNCAN' },
    { value: 'ERZURUM' }, { value: 'ESKİŞEHİR' }, { value: 'GAZİANTEP' }, { value: 'GİRESUN' },
    { value: 'GÜMÜŞHANE' }, { value: 'HAKKARİ' }, { value: 'HATAY' }, { value: 'ISPARTA' },
    { value: 'İÇEL' }, { value: 'İSTANBUL' }, { value: 'İZMİR' }, { value: 'KARS' },
    { value: 'KASTAMONU' }, { value: 'KAYSERİ' }, { value: 'KIRKLARELİ' }, { value: 'KIRŞEHİR' },
    { value: 'KOCAELİ' }, { value: 'KONYA' }, { value: 'KÜTAHYA' }, { value: 'MALATYA' },
    { value: 'MANİSA' }, { value: 'MARAŞ' }, { value: 'MARDİN' }, { value: 'MUĞLA' }, { value: 'MUŞ' },
    { value: 'NEVŞEHİR' }, { value: 'NİĞDE' }, { value: 'ORDU' }, { value: 'RİZE' },
    { value: 'SAKARYA' }, { value: 'SAMSUN' }, { value: 'SİİRT' }, { value: 'SİNOP' },
    { value: 'SİVAS' }, { value: 'TEKİRDAĞ' }, { value: 'TOKAT' }, { value: 'TRABZON' },
    { value: 'TUNCELİ' }, { value: 'ŞANLIURFA' }, { value: 'UŞAK' }, { value: 'VAN' },
    { value: 'YOZGAT' }, { value: 'ZONGULDAK' }, { value: 'AKSARAY' }, { value: 'BAYBURT' },
    { value: 'KARAMAN' }, { value: 'KIRIKKALE' }, { value: 'BATMAN' }, { value: 'ŞIRNAK' },
    { value: 'BARTIN' }, { value: 'ARDAHAN' }, { value: 'IĞDIR' }, { value: 'YALOVA' },
    { value: 'KARABÜK' }, { value: 'KİLİS' }, { value: 'OSMANİYE' }, { value: 'DÜZCE' },
  ]

}
