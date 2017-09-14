import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DivisionPage} from '../division/division';
import {TitlePage} from '../title/title';
import {ChapterPage} from '../chapter/chapter';
import {SectionPage} from '../section/section';
import {StatuePage} from '../statue/statue';
import {LocationPage} from '../location/location';
import {SearchPage} from '../search/search';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from '@ionic-native/camera-preview';

const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [[Camera], [CameraPreview]]
})

export class HomePage {

  public searchQuery: string;
  splash = true;

  constructor(public navCtrl: NavController, private camera: Camera,
              private cameraPreview: CameraPreview) {
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 3000);
  }

  goToDivision(params) {
    if (!params) params = {};
    this.navCtrl.push(DivisionPage);
  }

  goToTitle(params) {
    if (!params) params = {};
    this.navCtrl.push(TitlePage);
  }

  goToChapter(params) {
    if (!params) params = {};
    this.navCtrl.push(ChapterPage);
  }

  goToSection(params) {
    if (!params) params = {};
    this.navCtrl.push(SectionPage);
  }

  goToStatue(params) {
    if (!params) params = {};
    this.navCtrl.push(StatuePage);
  }

  goToSearch(params) {
    if (!params) params = {};
    this.navCtrl.push(SearchPage, {
      query: this.searchQuery
    });
    this.searchQuery = "";
  }

  goToLocation(params) {
    if (!params) params = {};
    this.navCtrl.push(LocationPage);
  }

  goToCamera(): void {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      console.log("Error trying to open camera.")
    });
  }

  askForPicture(): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      encodingType: this.camera.EncodingType.PNG,
      correctOrientation: true
    }
  }
}
