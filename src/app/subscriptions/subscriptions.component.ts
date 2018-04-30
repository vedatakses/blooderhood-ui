import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {
  bloodGroup: string;
  location: string;

  constructor(private authService: AuthService, private router: Router) { }

  goToHome() {
    this.router.navigate(['/dashboard']);
  }

  add() {
    if (this.bloodGroup != undefined && this.location != undefined) {
      console.log(this.bloodGroup);
      console.log(this.location);
      // TODO : add subscription service
      //subscriptionService.addSubscription(this.bloodGroup, this.location);
    }
  }

  delete() {
    if (this.bloodGroup != undefined && this.location != undefined) {
      console.log(this.bloodGroup);
      console.log(this.location);
      // TODO : add subscription service
      //subscriptionService.deleteSubscription(this.bloodGroup, this.location);
    }
  }

  bloodGroups = [
    {value: 'A RH (+)'},
    {value: 'A RH (-)'},
    {value: 'B RH (+)'},
    {value: 'B RH (-)'},
    {value: '0 RH (+)'},
    {value: '0 RH (-)'},
    {value: 'AB RH (+)'},
    {value: 'AB RH (-)'},
  ];

  locations = [
    {value: 'ADANA'}, {value: 'ADIYAMAN'}, {value: 'AFYON'}, {value: 'AĞRI'},
    {value: 'AMASYA'}, {value: 'ANKARA'}, {value: 'ANTALYA'}, {value: 'ARTVİN'},
    {value: 'AYDIN'}, {value: 'BALIKESİR'}, {value: 'BİLECİK'}, {value: 'BİNGÖL'},
    {value: 'BİTLİS'}, {value: 'BOLU'}, {value: 'BURDUR'}, {value: 'BURSA'},
    {value: 'ÇANAKKALE'}, {value: 'ÇANKIRI'}, {value: 'ÇORUM'}, {value: 'DENİZLİ'},
    {value: 'DİYARBAKIR)'}, {value: 'EDİRNE'}, {value: 'ELAZIĞ'}, {value: 'ERZİNCAN'},
    {value: 'ERZURUM'}, {value: 'ESKİŞEHİR'}, {value: 'GAZİANTEP'}, {value: 'GİRESUN'},
    {value: 'GÜMÜŞHANE'}, {value: 'HAKKARİ'}, {value: 'HATAY'}, {value: 'ISPARTA'},
    {value: 'İÇEL'}, {value: 'İSTANBUL'}, {value: 'İZMİR'}, {value: 'KARS'},
    {value: 'KASTAMONU'}, {value: 'KAYSERİ'}, {value: 'KIRKLARELİ'}, {value: 'KIRŞEHİR'},
    {value: 'KOCAELİ'}, {value: 'KONYA'}, {value: 'KÜTAHYA'}, {value: 'MALATYA'},
    {value: 'MANİSA'}, {value: 'MARAŞ'}, {value: 'MARDİN'}, {value: 'MUĞLA'}, {value: 'MUŞ'},
    {value: 'NEVŞEHİR'}, {value: 'NİĞDE'}, {value: 'ORDU'}, {value: 'RİZE'},
    {value: 'SAKARYA'}, {value: 'SAMSUN'}, {value: 'SİİRT'}, {value: 'SİNOP'},
    {value: 'SİVAS'}, {value: 'TEKİRDAĞ'}, {value: 'TOKAT'}, {value: 'TRABZON'},
    {value: 'TUNCELİ'}, {value: 'ŞANLIURFA'}, {value: 'UŞAK'}, {value: 'VAN'},
    {value: 'YOZGAT'}, {value: 'ZONGULDAK'}, {value: 'AKSARAY'}, {value: 'BAYBURT'},
    {value: 'KARAMAN'}, {value: 'KIRIKKALE'}, {value: 'BATMAN'}, {value: 'ŞIRNAK'},
    {value: 'BARTIN'}, {value: 'ARDAHAN'}, {value: 'IĞDIR'}, {value: 'YALOVA'},
    {value: 'KARABÜK'}, {value: 'KİLİS'}, {value: 'OSMANİYE'}, {value: 'DÜZCE'},
  ]

}
