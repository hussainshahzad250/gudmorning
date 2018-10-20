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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent,VendortabComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
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
    VendordataComponent,VendortabComponent
  ],
  exports: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent,VendortabComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestServiceProvider
  ]
})
export class AppModule {}
