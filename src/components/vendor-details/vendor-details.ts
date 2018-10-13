import { VendordataComponent } from './../vendordata/vendordata';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * Generated class for the VendorDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vendor-details',
  templateUrl: 'vendor-details.html'
})
export class VendorDetailsComponent {

  text: string;
  vendors?: any;
  vendorData?: any;
  value: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restService: RestServiceProvider) {
    console.log('Hello VendorDetailsComponent Component');
    this.value = navParams.get('event');
    this.vendors=this.value;
  }

  vendorDetails(event,vendor){
    console.log(JSON.stringify(vendor.id));
    this.restService.getVendorById(vendor.id).then(obj=>{
      this.vendorData = obj;
      // console.log(JSON.stringify("sdfsdfdsf "+this.vendorData));
      // alert(JSON.stringify(this.vendorData));
      this.navCtrl.push(VendordataComponent,{event:this.vendorData});
    })
  }
}
