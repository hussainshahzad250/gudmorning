import { VendorDetailsComponent } from './../../components/vendor-details/vendor-details';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// import {Observable} from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RestServiceProvider]
})
export class HomePage {

  datas: any;
  vendor: any;

  @Output() everySecond = new EventEmitter();

  constructor(public restService: RestServiceProvider,public navController: NavController) {
    restService.loadData().then(object=>{
      // console.log(JSON.stringify(object));
      this.datas=object.data;
      // console.log(JSON.stringify("Categories "+JSON.stringify(this.datas)));
    })
    // for GAllery START
//     this.photoLibrary.requestAuthorization().then(() => {
//   this.photoLibrary.getLibrary().subscribe({
//     next: library => {
//       library.forEach(function(libraryItem) {
//         console.log(libraryItem.id);          // ID of the photo
//         console.log(libraryItem.photoURL);    // Cross-platform access to photo
//         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
//         console.log(libraryItem.fileName);
//         console.log(libraryItem.width);
//         console.log(libraryItem.height);
//         console.log(libraryItem.creationDate);
//         console.log(libraryItem.latitude);
//         console.log(libraryItem.longitude);
//         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
//       });
//     },
//     error: err => { console.log('could not get photos'); },
//     complete: () => { console.log('done getting photos'); }
//   });
// })
// .catch(err => console.log('permissions weren\'t granted'));
    // for GAllery END
  }

  getData(event,obj){    
    console.log("Category Name :: " +obj.categoryName);    
    this.restService.getVendorByCategoryId(obj.categoryId).then(object=>{
      this.vendor=object;
      // this.everySecond.emit(this.vendor);
      console.log(JSON.stringify(this.vendor));
      // alert(JSON.stringify(this.vendor));
      this.navController.push(VendorDetailsComponent,{event:this.vendor});
    })
  }

}
