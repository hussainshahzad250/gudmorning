import { Video } from './../../providers/video';
import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'video-list',
  templateUrl: 'video-list.html',
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListPage {


  public SelectVideo = new EventEmitter();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }  

  onSelect(video: Video) {
    this.SelectVideo.emit(video);
  }
}
