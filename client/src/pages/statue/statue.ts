import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AppServer } from '../../services/appserver';

@Component({
  selector: 'page-statue',
  templateUrl: 'statue.html'
})
export class StatuePage {

  private section: any = null;
  private bookmarked: boolean = false;

  constructor(public navCtrl: NavController,public navParams: NavParams,public server: AppServer) {
    this.section=this.navParams.get('section');
    this.bookmarked=this.server.isInBookmark(this.section);
  }

  addToBookmark(){
    this.server.addToBookmark(this.section);
    this.bookmarked=true;
  }

  removeFromBookmark(){
    this.server.removeFromBookmark(this.section);
    this.bookmarked=false;
  }

}
