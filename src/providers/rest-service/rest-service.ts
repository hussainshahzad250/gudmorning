import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {
  datas: any;

  // @Input() vendorById: any;
  vendorById?: any;
  vendor?: any;

  apiRootUrl: "http://52.14.184.135:8080/jugoapi";

  constructor(public http: Http) {
    console.log('Hello RestServiceProvider Provider');
  }

  loadData(){
    if(this.datas){
      return Promise.resolve(this.datas);
    }
    let opt: RequestOptions;
    let myHeaders: Headers=new Headers;
    myHeaders.set('Accept','application/json; charset=utf-8');
    myHeaders.append('Content-Type','application/json; charset=utf-8');
    opt= new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve=>{
      this.http.get('http://52.14.184.135:8080/jugoapi/category',opt).map(res=>res.json()).subscribe(data=>{
        this.datas=data;
        // console.log("Categories at servce level " + JSON.stringify(this.datas));
        resolve(this.datas);
      })
    })
  }


  getVendorByCategoryId(categoryId){
    console.log("categoryId " +categoryId);
    if(this.vendorById)
      return Promise.resolve(this.vendorById);
    let opt: RequestOptions;
    let myHeaders: Headers=new Headers;
    myHeaders.set('Accept','application/json; charset=utf-8');
    myHeaders.append('Content-Type','application/json; charset=utf-8');
    opt= new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve=>{
      this.http.get('http://52.14.184.135:8080/jugoapi/vendorCategory/'+categoryId,opt).map(resp=>resp.json()).subscribe(vendor=>{
        this.vendorById=vendor.data;
        // console.log("Vendor at service level " + JSON.stringify(this.vendorById));
        resolve(this.vendorById);
      })
    })
  }
  getVendorById(vendorId){
    console.log("vendorId " +vendorId);
    if(this.vendor)
      return Promise.resolve(this.vendor);
    let opt: RequestOptions;
    let myHeaders: Headers=new Headers;
    myHeaders.set('Accept','application/json; charset=utf-8');
    myHeaders.append('Content-Type','application/json; charset=utf-8');
    opt= new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve=>{
      this.http.get(' http://52.14.184.135:8080/jugoapi/vendor/'+vendorId,opt).map(resp=>resp.json()).subscribe(ven=>{
        this.vendor=ven.data;
        console.log("Vendor By Id at service level " + JSON.stringify(this.vendor));
        resolve(this.vendor);
      })
    })


    

    
  }
  

}
