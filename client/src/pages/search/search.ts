import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppServer } from '../../services/appserver';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  private query: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.query = navParams.get("query");
  }

}
