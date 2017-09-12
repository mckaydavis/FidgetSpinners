import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatuePage } from '../statue/statue';

@Component({
  selector: 'page-section',
  templateUrl: 'section.html'
})
export class SectionPage {

  constructor(public navCtrl: NavController) {
  }
  goToStatue(params){
    if (!params) params = {};
    this.navCtrl.push(StatuePage);
  }
}
