import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';
import { DivisionPage } from '../pages/division/division';
import { TitlePage } from '../pages/title/title';
import { ChapterPage } from '../pages/chapter/chapter';
import { SectionPage } from '../pages/section/section';
import { StatuePage } from '../pages/statue/statue';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationPage } from '../pages/location/location';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    ListPage,
    TabsPage,
    BookmarksPage,
    HelpPage,
    SettingsPage,
    SearchPage,
    DivisionPage,
    TitlePage,
    ChapterPage,
    SectionPage,
    StatuePage,
    LocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookmarksPage,
    HelpPage,
    SettingsPage,
    SearchPage,
    DivisionPage,
    TitlePage,
    ChapterPage,
    SectionPage,
    StatuePage,
    LocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider
  ]
})
export class AppModule {}
