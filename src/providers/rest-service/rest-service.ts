import { LoginRequest } from './../../components/login/user';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

@Injectable()
export class RestServiceProvider {

  datas: any;
  vendorById?: any;
  vendor?: any;
  loginRes: any;

  loginUrl: string = "http://52.14.184.135:8080/jugoapi/user/login";
  apiRootUrl: "http://52.14.184.135:8080/jugoapi";

  constructor(public http: Http) {
    console.log('Hello RestServiceProvider Provider');
  }

  loadCategories() {
    if (this.datas) {
      return Promise.resolve(this.datas);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.set('Accept', 'application/json; charset=utf-8');
    myHeaders.append('Content-Type', 'application/json; charset=utf-8');
    myHeaders.append('Access-Control-Allow-Origin',"*");
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get('http://52.14.184.135:8080/jugoapi/category', opt).map(res => res.json()).subscribe(data => {
        this.datas = data;
        resolve(this.datas);
      })
    })
  }

  getVendorByCategoryId(categoryId) {
    // console.log("categoryId " + categoryId);
    // if (this.vendorById)
    //   return Promise.resolve(this.vendorById);
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.set('Accept', 'application/json; charset=utf-8');
    myHeaders.append('Content-Type', 'application/json; charset=utf-8');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get('http://52.14.184.135:8080/jugoapi/vendorCategory/' + categoryId, opt).map(resp => resp.json()).subscribe(vendor => {
        this.vendorById = vendor.data;
        resolve(this.vendorById);
      })
    })
  }

  getVendorById(vendorId) {
    console.log("vendorId " + vendorId);
    // if (this.vendor)
    //   return Promise.resolve(this.vendor);
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.set('Accept', 'application/json; charset=utf-8');
    myHeaders.append('Content-Type', 'application/json; charset=utf-8');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get('http://52.14.184.135:8080/jugoapi/vendor/' + vendorId, opt).map(resp => resp.json()).subscribe(ven => {
        this.vendor = ven.data;
        console.log("Vendor By Id at service level " + JSON.stringify(this.vendor));
        resolve(this.vendor);
      })
    })
  }


  login(loginRequest: LoginRequest) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this
      .http
      .post(this.loginUrl, loginRequest, options)
      .map((res) => console.log(res.json())).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
