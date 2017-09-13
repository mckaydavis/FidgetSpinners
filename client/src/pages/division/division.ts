import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TitlePage } from '../title/title';
import { ChapterPage } from '../chapter/chapter';
import { SectionPage } from '../section/section';
import { StatuePage } from '../statue/statue';
import { AppServer } from '../../services/appserver';
import { Response } from '@angular/http';

@Component({
  selector: 'page-division',
  templateUrl: 'division.html'
})
export class DivisionPage {

  private divisions: any[] = null;

  constructor(public navCtrl: NavController,public server: AppServer) {
    this.divisions=[];
    this.loadLocalJson();
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  openDivision(div){
    this.navCtrl.push(TitlePage,{division: div});
  }

  addMealSuccess(res: Response){
    console.log("addMealSuccess");
    try{
      let that=this;
      let jsonRes=res.json();
      //console.log(JSON.stringify(jsonRes));
      for (var a=0;a<jsonRes.length;a++){
        this.divisions.push(jsonRes[a]);
      }
    }catch(e){
      alert("Exception: "+e.message);
    }
  }

  addMealFailure(error: any){
    console.log("addMealFailure");
    alert('Error: '+JSON.stringify(error));
  }

  loadLocalJson(){
    let that=this;
    this.server.getLocalJsonTree().subscribe(
      res=>that.addMealSuccess(res),err=>that.addMealFailure(err)
    );
  }
}
