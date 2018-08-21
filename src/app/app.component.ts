import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
// import { WeatherPage } from '../pages/weather/weather';
// import { AddDirectoryPage } from '../pages/adddirectory/adddirectory';
// import { ImagesPage } from '../pages/images/images';
// import { PostsPage } from '../pages/posts/posts';
// import { AddPostPage } from '../pages/addpost/addpost';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;
  users = this.users;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.pages = [     
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  logout(){
    console.log('logout');
    this.nav.setRoot(HomePage);
  }
}
