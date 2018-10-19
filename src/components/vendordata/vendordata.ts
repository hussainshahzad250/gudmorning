import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
/**
 * Generated class for the VendordataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vendordata',
  templateUrl: 'vendordata.html',
  providers:[RestServiceProvider]
})
export class VendordataComponent {

  val; any;
  vendorDetail?: any;
  vendorPhotos?: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public geolocation: Geolocation) {
    // private toastCtrl: ToastController ,statusBar: StatusBar,splashScreen: SplashScreen
    this.val = navParams.get('event');
    this.vendorDetail = this.val;
    console.log("AT VENDOR DATA " + JSON.stringify(this.vendorDetail));
    this.vendorPhotos = this.vendorDetail.photos;
    // console.log(this.vendorPhotos);


    // GEO LOCATION START
    platform.ready().then(() => {
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lng: ' + pos.coords.longitude);
      });
      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lng: ' + pos.coords.longitude);
      });
      watch.unsubscribe();
    });
    // GEO LOCATION END


    // PUSH Notification
    // platform.ready().then(() => {
    //   statusBar.styleDefault();
    //   splashScreen.hide();
  
    //   // OneSignal Code start:
    //   // Enable to debug issues:
    //   // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
    //   var notificationOpenedCallback = function(jsonData) {
    //     console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    //   };
  
    //   window["plugins"].OneSignal
    //     .startInit("ffae363d-7cd0-438a-811e-6bce553fbabd", "1009300281995")
    //     .handleNotificationOpened(notificationOpenedCallback)
    //     .endInit();
    // });
  }

}