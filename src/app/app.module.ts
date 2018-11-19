import { VideoPipe } from './../providers/video.pipe';
import { VideoDetailsPage } from './../pages/video-details/video-details';
import { VideoListPage } from './../pages/video-list/video-list';
import { VideoService } from './../providers/video.service';

import { FormsModule } from '@angular/forms';
import { VideoCenterPage } from './../pages/video-center/video-center';
import { VendortabComponent } from './../components/vendortab/vendortab';
import { Geolocation } from '@ionic-native/geolocation';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { RestServiceProvider } from '../providers/rest-service/rest-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginComponent } from '../components/login/login';
import { VendordataComponent } from './../components/vendordata/vendordata';
import { RegisterComponent } from './../components/register/register';
import { VendorDetailsComponent } from '../components/vendor-details/vendor-details';

import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { Push } from '@ionic-native/push';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';


const firebaseConfig={   
  apiKey: "AIzaSyAqFi_L4pidm-KZBw2feEuv0iU049ZC910",
  authDomain: "gudmorning-sahebganj.firebaseapp.com",
  databaseURL: "https://gudmorning-sahebganj.firebaseio.com",
  projectId: "gudmorning-sahebganj",
  storageBucket: "gudmorning-sahebganj.appspot.com",
  messagingSenderId: "1009300281995"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent,
    VendortabComponent,

    VideoCenterPage,
    VideoListPage,
    VideoDetailsPage,
    VideoListPage,
    VideoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    BrowserModule, FormsModule, HttpModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,

    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule, 

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent,
    VendortabComponent,
    VideoCenterPage,
    VideoListPage,
    VideoDetailsPage,
    VideoListPage


  ],
  exports: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent,
    VendortabComponent,
    VideoCenterPage,
    VideoListPage,
    VideoDetailsPage,
    VideoListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    Push,
    VideoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestServiceProvider
  ]
})
export class AppModule {}
