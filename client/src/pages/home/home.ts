import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DivisionPage } from '../division/division';
import { TitlePage } from '../title/title';
import { ChapterPage } from '../chapter/chapter';
import { SectionPage } from '../section/section';
import { StatuePage } from '../statue/statue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToDivision(params){
    if (!params) params = {};
    this.navCtrl.push(DivisionPage);
  }goToTitle(params){
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
