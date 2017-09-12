import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {StatuePage} from '../statue/statue';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
  providers: [[Geolocation]]
})
export class LocationPage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
  }

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
}
