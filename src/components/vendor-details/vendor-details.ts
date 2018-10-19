import { VendordataComponent } from './../vendordata/vendordata';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'vendor-details',
  templateUrl: 'vendor-details.html'
})
export class VendorDetailsComponent {

  vendors?: any;
  vendorData?: any;
  value: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private restService: RestServiceProvider) {
    this.value = navParams.get('event');
    this.vendors = this.value;
  }

  vendorDetails(vendor) {
    console.log("Vendor Id [ID] "+JSON.stringify(vendor.id));
    this.restService.getVendorById(vendor.id).then(obj => {
      this.vendorData = obj;
      console.log("Vendor Data[DATA] "+JSON.stringify(this.vendorData));
      this.navCtrl.push(VendordataComponent, { event: this.vendorData });
    })
  }

  doRefresh(refresher) {
    this.value = this.navParams.get('event');
    this.vendors = this.value;
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }
}
