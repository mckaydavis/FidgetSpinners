import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {StatuePage} from '../statue/statue';
import {Geolocation} from '@ionic-native/geolocation';
import {AppServer} from '../../services/appserver';
import {locationService} from '../../services/locationService';
import {Response} from '@angular/http';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
  providers: [[Geolocation]]
})
export class LocationPage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private server: AppServer,
              public locationServer: locationService) {
    this.loadSections();
  }

  private allSections: any[] = null;
  private sections: any[] = [];
  private loadingSections: boolean = false;
  private section: any = null;
  private jsonResLength: number;

  goToStatue(params) {
    if (!params) params = {};
    this.navCtrl.push(StatuePage);
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data.coords.latitude
      // data.coords.longitude
    });
  }

  loadMore(infiniteScroll) {
    if (this.sections.length + 10 < this.jsonResLength) {
      let oldSectionsLength = this.sections.length;
      for (var i = 0; i < 10; i++) {
        this.sections[oldSectionsLength + i] = this.allSections[oldSectionsLength + i]
      }
    }
    infiniteScroll.complete();
  }

  openSection(sec, id) {
    var self = this;
    self.navCtrl.push(StatuePage, {section: this.section});
  }

  sectionsSuccess(res: Response) {
    this.allSections = [];
    this.sections = [];
    this.loadingSections = false;
    try {
      let jsonRes = res.json();
      this.jsonResLength = jsonRes.length;
      for (var a = 0; a < this.jsonResLength; a++) {
        let js = jsonRes[a];
        js.bookmarked = this.server.isInBookmark(js);
        this.allSections.push(js);
        if (a < 15) {
          this.sections[a] = this.allSections[a];
        }
      }
    } catch (e) {
      alert("Exception: " + e.message);
    }

    for (var i = 0; i < this.allSections.length; i++) {
      this.allSections[i] = this.convertLocationDataToStatutes(this.allSections[i]);
    }

    for (var i = 0; i < this.sections.length; i++) {
      this.sections[i] = this.convertLocationDataToStatutes(this.sections[i]);
      console.log(this.convertLocationDataToStatutes(this.sections[i]));
    }
  }

  convertLocationDataToStatutes(data: any): any {
    var self = this;
    console.log(data.statute);
    var chapterandsection = data.statute;
    var values = chapterandsection.split('-');
    var chapternumber = values[0];
    var sectionnumber = values[1];

    (self.server).getSection(chapternumber, sectionnumber)
      .map(response => response.json()).subscribe(result => {
      return result[0];
    });
  }

  sectionsFailure(error: any) {
    this.loadingSections = false;
    alert('Error: ' + JSON.stringify(error));
  }

  loadSections() {
    this.loadingSections = true;
    (this.locationServer).getLocations().subscribe(
      res => this.sectionsSuccess(res), err => this.sectionsFailure(err)
    );
  }

}
