import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChapterPage } from '../chapter/chapter';
import { SectionPage } from '../section/section';
import { StatuePage } from '../statue/statue';

@Component({
  selector: 'page-title',
  templateUrl: 'title.html'
})
export class TitlePage {

  constructor(public navCtrl: NavController) {
  }
  goToChapter(params){
    if (!params) params = {};
    this.navCtrl.push(ChapterPage);
  }goToSection(params){
    if (!params) params = {};
    this.navCtrl.push(SectionPage);
  }goToStatue(params){
    if (!params) params = {};
    this.navCtrl.push(StatuePage);
  }
}
