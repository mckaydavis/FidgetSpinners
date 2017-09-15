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
  private sectionsList: any[] = null;
  private currentSecIndex: number = 0;

  constructor(public navCtrl: NavController,public navParams: NavParams,public server: AppServer) {
    this.section=this.navParams.get('section');
    if (this.navParams.get('sectionsList')){
      this.sectionsList=this.navParams.get('sectionsList');
      this.currentSecIndex=this.navParams.get('sectionIndex');
    }
    this.bookmarked=this.server.isInBookmark(this.section);
  }

  addToBookmark(){
    this.server.addToBookmark(this.section);
    this.bookmarked=true;
    this.section.bookmarked=this.bookmarked;
  }

  removeFromBookmark(){
    this.server.removeFromBookmark(this.section);
    this.bookmarked=false;
    this.section.bookmarked=this.bookmarked;
  }

  moveNext(){
    if (this.sectionsList!=null){
      if (this.currentSecIndex<(this.sectionsList.length-1)){
        this.currentSecIndex++;
        this.section=this.sectionsList[this.currentSecIndex];
      }
    }
  }

  movePrev(){
    if (this.sectionsList!=null){
      if (this.currentSecIndex>0){
        this.currentSecIndex--;
        this.section=this.sectionsList[this.currentSecIndex];
      }
    }
  }

  goBack(){
    this.navCtrl.pop()
  }
}
