/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
//Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServer {
    
    //private BASE_URL="http://192.168.8.107:9100/optdin/api/";
    private BASE_URL="https://hrs.diblii.com/api/";
    //https://hrs.diblii.com/api/chapter/1/section/
    
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}

    getLocalJsonTree(){
        console.log("getLocalJsonTree");

        let url="assets/hrstree.txt";
        console.log(url);
        return this.http.get(url);
    }

    getSectionsForChapter(chapNum){
        let url=this.BASE_URL+"chapter/"+chapNum+"/section/";
        console.log(url);
        return this.http.get(url);
    }
}