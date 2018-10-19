import { RestServiceProvider } from './../../providers/rest-service/rest-service';

import { Component } from '@angular/core';

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

  text: string;

  constructor(public restService: RestServiceProvider) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
    restService.loadCategories().then(data=>{
      console.log(JSON.stringify(data));
    })

  }

}
