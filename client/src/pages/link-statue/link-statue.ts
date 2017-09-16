import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AppServer } from '../../services/appserver';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-statue',
  templateUrl: 'link-statue.html'
})
export class LinkStatuePage {

  private section: any = null;
  
  constructor(private sanitizer:DomSanitizer,public navCtrl: NavController,public navParams: NavParams,public server: AppServer) {
    this.section=this.navParams.get('section');
    this.createHyperlinksOfSection();
  }

  loadChapterSection(chap,sec){
    let self = this;
    (self.server).getSection(chap,sec).subscribe(result => {
        console.log("got section");
        let jsonRes=result.json();
        console.log(JSON.stringify(jsonRes));
        self.navCtrl.push(LinkStatuePage,{section: jsonRes[0]});
    });
  }

  shoutMe(chp){
    let vals=chp.split("-");
    if (vals.length>1){
      let chap=vals[0].substring(1);
      let sec=vals[1];
      this.loadChapterSection(chap,sec);
    }
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }

  createHyperlinksOfSection(){
    let regEx=/§\d+-\d+/;
    for (var a=0;a<this.section.text.length;a++){
      let txt=this.section.text[a];
      txt=txt.replace(regEx,"<a chapter-hyper=\"$&\" onclick=\"callFromLink('$&');\">$&</a>");
      this.section.text[a]=txt;
    }
  }

  addToBookmark(){
    this.server.addToBookmark(this.section);
    this.section.bookmarked=true;
  }

  removeFromBookmark(){
    this.server.removeFromBookmark(this.section);
    this.section.bookmarked=false;
  }
}
