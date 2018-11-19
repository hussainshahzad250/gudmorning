import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginComponent } from './../components/login/login';
import { VideoCenterPage } from '../pages/video-center/video-center';
import * as firebase from 'firebase';
const firebaseConfig={   
  apiKey: "AIzaSyAqFi_L4pidm-KZBw2feEuv0iU049ZC910",
  authDomain: "gudmorning-sahebganj.firebaseapp.com",
  databaseURL: "https://gudmorning-sahebganj.firebaseio.com",
  projectId: "gudmorning-sahebganj",
  storageBucket: "gudmorning-sahebganj.appspot.com",
  messagingSenderId: "1009300281995"
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private push: Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginComponent },
      { title: 'Videos', component: VideoCenterPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.pushSetUp();
    });
    firebase.initializeApp(firebaseConfig);
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }


  // pushSetUp(){
  //   const options: PushOptions = {
  //     android: {
  //       senderID: '802817717542'
  //     },
  //     ios: {
  //         alert: 'true',
  //         badge: true,
  //         sound: 'false'
  //     },
  //     windows: {},
  //     browser: {
  //         pushServiceURL: 'http://push.api.phonegap.com/v1/push'
  //     }
  //  };   
  //  const pushObject: PushObject = this.push.init(options);   
  //  pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));   
  //  pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));   
  //  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  // }

}
