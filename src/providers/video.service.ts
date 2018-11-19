import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';

// firebase Config
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Video } from './video';

@Injectable()
export class VideoService {

  selectedVideo: Video;
  // constructor(private http: Http, private firebase: AngularFireDatabase) {
  //   console.log("selectedVideo ::" + this.selectedVideo);
  // }

  // // for firebase start
  // videoList: AngularFireList<any>;

  // getFirebaseVideos() {
  //   this.videoList = this.firebase.list('videos');
  //   console.log("Firebase Video List"+JSON.stringify(this.videoList));
    
  //   return this.videoList;
  // }

  // saveObjectToFirebase(video: Video) {
  //   console.log('video:: ', JSON.stringify(video));
  //   this.videoList.push({
  //     title: video.title,
  //     url: video.url,
  //     description: video.description
  //   });
  //   console.log('Data Saved Successfully.');
  // }

  // updateObjectToFirebase(video: Video) {
  //   this.videoList.update(video.$key, {
  //     firstName: video.title,
  //     lastName: video.url,
  //     empCode: video.description
  //   });
  //   console.log('Data Edited Successfully.');
  // }

  // deleteObjectFromFirebase(key: string) {
  //   this.videoList.remove(key);
  //   console.log('Video Deleted Successfully');
  // }
  // for firebase end
}
