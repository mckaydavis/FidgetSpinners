import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StatuePage} from '../statue/statue';
import {AppServer} from '../../services/appserver';
import {Response} from '@angular/http';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  private query: string;
  private sections: any[] = null;
  private loadingSections: boolean = false;
  private section: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, private server: AppServer) {
    this.query = navParams.get("query");
    this.sections = [];
    this.loadSections();
  }

  openSection(sec) {
    this.server.getSection(sec._source.chapter, sec._source.section)
      .map(response => response.json()).subscribe(result => this.section =result);

    if(this.section != null) {
      this.section = JSON.parse((JSON.stringify(this.section))
        .substring(1, (JSON.stringify(this.section)).length-1));
      this.navCtrl.push(StatuePage, {section: this.section});
    }
  }

  sortSections() {
    for (var a = 0; a < this.sections.length; a++) {
      for (var b = a + 1; b < this.sections.length; b++) {
        let seca = this.sections[a];
        let secb = this.sections[b];
        if (parseFloat(seca.section) > parseFloat(secb.section)) {
          this.sections[a] = secb;
          this.sections[b] = seca;
        }
      }
    }
  }

  sectionsSuccess(res: Response) {
    console.log("sectionsSuccess");
    this.loadingSections = false;
    try {
      let that = this;
      let jsonRes = res.json();
      for (var a = 0; a < jsonRes.length; a++) {
        this.sections.push(jsonRes[a]);
      }
      this.sortSections();
    } catch (e) {
      alert("Exception: " + e.message);
    }
  }

  sectionsFailure(error: any) {
    console.log("sectionsFailure");
    this.loadingSections = false;
    alert('Error: ' + JSON.stringify(error));
  }

  loadSections() {
    this.loadingSections = true;
    (this.server).getSearchQuery(this.query).subscribe(
      res => this.sectionsSuccess(res), err => this.sectionsFailure(err)
    );
  }

}
