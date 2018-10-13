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

  constructor() {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }
  login(){
    console.log("Hello "+this.username +" " + this.password);
    alert("Hello "+this.username +" " + this.password);    
  }

}
