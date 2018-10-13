
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the VendordataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vendordata',
  templateUrl: 'vendordata.html'
})
export class VendordataComponent {

  text: string;
  val; any;
  vendorDetail?: any;
  vendorPhotos?: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private platform: Platform, private geolocation: Geolocation) {
    console.log('Hello VendordataComponent Component');
    this.val = null;
    this.vendorDetail=null;
    this.val = navParams.get('event');
    this.vendorDetail =this.val;
    console.log("AT VENDOR DATA " + JSON.stringify(this.vendorDetail));
    this.vendorPhotos = this.vendorDetail.photos;
    console.log(this.vendorPhotos);
    
    platform.ready().then(() => {
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        // alert('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });
      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        // alert('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();
    });
  }

}