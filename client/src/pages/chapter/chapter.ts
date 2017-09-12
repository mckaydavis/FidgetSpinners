import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SectionPage } from '../section/section';
import { StatuePage } from '../statue/statue';

@Component({
  selector: 'page-chapter',
  templateUrl: 'chapter.html'
})
export class ChapterPage {

  constructor(public navCtrl: NavController) {
  }
  goToSection(params){
    if (!params) params = {};
    this.navCtrl.push(SectionPage);
  }goToStatue(params){
    if (!params) params = {};
    this.navCtrl.push(StatuePage);
  }
}
