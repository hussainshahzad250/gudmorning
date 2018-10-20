import { NavController, ToastController } from 'ionic-angular';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';

import { Component } from '@angular/core';
import { LoginComponent } from '../login/login';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register',
  templateUrl: 'register.html',
  providers: [RestServiceProvider]
})
export class RegisterComponent {

  constructor(public restService: RestServiceProvider,public navCtrl:NavController,public toastCtrl:ToastController) {
    // restService.loadCategories().then(data=>{
    //   console.log(JSON.stringify(data));
    // })
  }

  register(){
   // TOAST START
     let toast = this.toastCtrl.create({
      message: 'Register successfully !',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    // TOAST END

    this.goToLogin();
  }

  goToLogin(){
    this.navCtrl.push(LoginComponent);
  }

}
