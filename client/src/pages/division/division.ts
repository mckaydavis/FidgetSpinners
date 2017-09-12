import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TitlePage } from '../title/title';
import { ChapterPage } from '../chapter/chapter';
import { SectionPage } from '../section/section';
import { StatuePage } from '../statue/statue';

@Component({
  selector: 'page-division',
  templateUrl: 'division.html'
})
export class DivisionPage {

  constructor(public navCtrl: NavController) {
  }
  goToTitle(params){
    if (!params) params = {};
    this.navCtrl.push(TitlePage);
  }goToChapter(params){
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
