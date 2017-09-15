import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AppServer } from '../../services/appserver';
import { DomSanitizer } from '@angular/platform-browser';
import {ElementRef, ViewChild} from '@angular/core';
import {LinkStatuePage } from '../link-statue/link-statue';

@Component({
  selector: 'page-statue',
  templateUrl: 'statue.html'
})
export class StatuePage {

  private section: any = null;
  private bookmarked: boolean = false;
  private sectionsList: any[] = null;
  private currentSecIndex: number = 0;
  private isFromSearch: boolean = false;

  //@ViewChild('statue-markdown') statueContainer: ElementRef;

  constructor(private sanitizer:DomSanitizer,public navCtrl: NavController,public navParams: NavParams,public server: AppServer) {
    this.section=this.navParams.get('section');
    if (this.navParams.get('sectionsList')){
      this.sectionsList=this.navParams.get('sectionsList');
      this.currentSecIndex=this.navParams.get('sectionIndex');
    }
    if (this.navParams.get('isFromSearch')){
      this.isFromSearch=true;
    }

    this.bookmarked=this.server.isInBookmark(this.section);
    if (this.isFromSearch){
      this.loadSection(this.section._id);
    }else{
      this.createHyperlinksOfSection();
    }

    (<any>window).statueRef=this;
  }

  goBack(){
    this.navCtrl.pop();
  }

  loadSection(id){
    console.log("loadSection: "+id);
    let self = this;
    (self.server).getStatute(id).subscribe(result => {
      let jsonRes=result.json();
      console.log(JSON.stringify(jsonRes));
      self.section=jsonRes[0];
      self.section.bookmarked=self.server.isInBookmark(self.section);
      self.createHyperlinksOfSection();
    });
  }

  loadChapterSection(chap,sec){
    console.log("loadChapterSection: "+chap+","+sec);
    let self = this;
    (self.server).getSection(chap,sec).subscribe(result => {
      console.log("got section");
      let jsonRes=result.json();
      console.log(JSON.stringify(jsonRes));
      self.navCtrl.push(LinkStatuePage,{section: jsonRes[0]});
    });
  }

  shoutMe(chp){
    //alert("shoutMe: "+chp);
    let vals=chp.split("-");
    if (vals.length>1){
      let chap=vals[0].substring(1);
      let sec=vals[1];
      //this.navCtrl.push(LinkStatuePage,{chapter: chap,section: sec});
      this.loadChapterSection(chap,sec);
    }
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }

  createHyperlinksOfSection(){
    let self=this;
    let regEx=/§\d+-\d+/;
    for (var a=0;a<this.section.text.length;a++){
      let txt=this.section.text[a];
      txt=txt.replace(regEx,"<a chapter-hyper=\"$&\" onclick=\"callFromLink('$&');\">$&</a>");
      //console.log(txt);
      this.section.text[a]=txt;
    }
  }

  addToBookmark(){
    this.server.addToBookmark(this.section);
    this.bookmarked=true;
    this.section.bookmarked=this.bookmarked;
  }

  removeFromBookmark(){
    this.server.removeFromBookmark(this.section);
    this.bookmarked=false;
    this.section.bookmarked=this.bookmarked;
  }

  moveNext(){
    if (this.sectionsList!=null){
      if (this.currentSecIndex<(this.sectionsList.length-1)){
        this.currentSecIndex++;
        if (this.isFromSearch){
          this.loadSection(this.sectionsList[this.currentSecIndex]._id);
        }else{
          this.section=this.sectionsList[this.currentSecIndex];
          this.createHyperlinksOfSection();
        }
      }
    }
  }

  movePrev(){
    if (this.sectionsList!=null){
      if (this.currentSecIndex>0){
        this.currentSecIndex--;
        if (this.isFromSearch){
          this.loadSection(this.sectionsList[this.currentSecIndex]._id);
        }else{
          this.section=this.sectionsList[this.currentSecIndex];
          this.createHyperlinksOfSection();
        }
      }
    }
  }

}
