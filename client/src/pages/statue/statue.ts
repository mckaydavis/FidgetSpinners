import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-statue',
  templateUrl: 'statue.html'
})
export class StatuePage {

  private section: any = null;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.section=this.navParams.get('section');
  }

}
