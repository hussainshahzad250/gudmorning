import { RegisterComponent } from './../register/register';
import { LoginRequest, LoginResponse } from './user';
import { HomePage } from './../../pages/home/home';
import { NavController, ToastController } from 'ionic-angular';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { Component, ViewChild } from '@angular/core';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  @ViewChild('username') username;
  @ViewChild('password') password;
  text: string;
  loginRequest: LoginRequest;
  loginData: LoginResponse;



  constructor(public restServiceProvider: RestServiceProvider, public navCtrl: NavController, private toastCtrl: ToastController) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
    this.loginRequest = new LoginRequest();
  }

  login() {
    // TOAST START
    let toast = this.toastCtrl.create({
      message: 'Login successfully !',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    // TOAST END
    this.navCtrl.push(HomePage, { event: this.username });
    // console.log("Hello " + this.username + " " + this.password);
    // this.loginRequest.username = this.username;
    // this.loginRequest.password = this.password;
    // console.log("Request " + this.loginRequest);

    // this.restServiceProvider.login(this.loginRequest).subscribe(response => {
    //   this.loginData = response;

    //   this.navCtrl.push(HomePage, { event: this.username });
    //   let toast = this.toastCtrl.create({
    //     message: 'Login successfully !',
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // }, (error) => {
    //   if (error.status == 0) {
    //     alert('Api is not Working or DOwn');
    //   }
    //   else {
    //     console.log(error);
    //     alert(error);
    //   }
    // });

    //   {
    //   this.loginData = obj;
    //   console.log(" loginData "+this.loginData);
    //   if(this.loginData.code==='LOGIN_FAIL'){
    //     let toast = this.toastCtrl.create({
    //       message: this.loginData.message,
    //       duration: 3000,
    //       position: 'top'
    //     });
    //     toast.present();
    //     this.navCtrl.push(LoginComponent);
    //   }

    // this.navCtrl.push(HomePage,{event:this.username});
    // })

    // TOAST START
    // let toast = this.toastCtrl.create({
    //   message: 'Login successfully !',
    //   duration: 3000,
    //   position: 'top'
    // });
    // toast.present();
    // TOAST END
  }

  goToRegister(){
    this.navCtrl.push(RegisterComponent);
  }
  

}
