import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import {DivisionPage} from '../pages/division/division';
// import {TitlePage} from '../pages/title/title';
// import {ChapterPage} from '../pages/chapter/chapter';
// import {SectionPage} from '../pages/section/section';
// import {StatuePage} from '../pages/statue/statue';
import {SettingsPage} from '../pages/settings/settings';
import {HelpPage} from '../pages/help/help';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';


import {HomePage} from '../pages/home/home';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;
    activePage: any;

    pages: Array<{ title: string, component: any, icon: any }>;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });

        // ngFor menu items
        this.pages = [
            {title: 'Home', component: HomePage, icon: 'ios-home'},
            {title: 'Bookmarks', component: BookmarksPage, icon: 'ios-bookmark'},
            {title: 'Help', component: HelpPage, icon: 'ios-help-circle-outline'},
            {title: 'Settings', component: SettingsPage, icon: 'ios-settings'},
        ];

        this.activePage = this.pages[0];
    }

    openPage(page) {
        this.nav.setRoot(page.component);
        this.activePage = page;
    }

    checkActive(page) {
        return page == this.activePage;
    }
}
