
import { VideoService } from './../../providers/video.service';
import { Video } from './../../providers/video';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { Reference } from '@firebase/database-types';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

@Component({
  selector: 'video-center',
  templateUrl: 'video-center.html'
})
export class VideoCenterPage {
  selectedVideo: Video;
  videos: any;

  videoList = [];
  ref :any;
  constructor( public loadingController: LoadingController) {
    this.ref=firebase.database().ref('videos'); 
    this.ref.on('value', resp => {
      this.videoList = [];
      this.videoList = snapshotToArray(resp);
      console.log(JSON.stringify(this.videoList));
      
    });
  }

  onSelectVideo(video: Video) {
    console.log(this.selectedVideo);
    this.selectedVideo = video;    
  }

  

}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};
