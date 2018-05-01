import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {
  bloodGroup: string;
  location: string;
  hospital: string;
  contact: string;

  constructor(private router: Router, private donationService: DonationService) { }

  ngOnInit() {
  }

  createDonation() {
    if (this.bloodGroup != undefined && this.location != undefined
      && this.hospital != undefined && this.contact != undefined) {
      let donation = {
        bloodGroup: this.bloodGroup,
        location: this.location,
        hospital: this.hospital,
        conact: this.contact
      }
      this.donationService.createDonation(donation);
    }
  }

  cancel() {
    this.router.navigate(["/dashboard"]);
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

  locations = [
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