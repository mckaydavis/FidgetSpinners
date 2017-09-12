import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { StatuePage } from '../statue/statue';
import { AppServer } from '../../services/appserver';
import { Response } from '@angular/http';

@Component({
  selector: 'page-section',
  templateUrl: 'section.html'
})
export class SectionPage {

  private chapter: any = null;
  private sections: any[] = null;
  private loadingSections: boolean = false;

  constructor(public navCtrl: NavController,private navParams: NavParams,private server: AppServer) {
    this.chapter=this.navParams.get('chapter');
    this.sections=[];
    this.loadSections();
  }

  openSection(sec){
    this.navCtrl.push(StatuePage,{section: sec});
  }

  sectionsSuccess(res: Response){
    console.log("sectionsSuccess");
    this.loadingSections=false;
    try{
      let that=this;
      let jsonRes=res.json();
      console.log(JSON.stringify(jsonRes));
      for (var a=0;a<jsonRes.length;a++){
        this.sections.push(jsonRes[a]);
      }
    }catch(e){
      alert("Exception: "+e.message);
    }
  }

  sectionsFailure(error: any){
    console.log("sectionsFailure");
    this.loadingSections=false;
    alert('Error: '+JSON.stringify(error));
  }

  loadSections(){
    let that=this;
    this.loadingSections=true;
    this.server.getSectionsForChapter(this.chapter.number).subscribe(
      res=>that.sectionsSuccess(res),err=>that.sectionsFailure(err)
    );
  }
}
