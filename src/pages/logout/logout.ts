import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DirectoryPage } from '../directory/directory';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-logput',
  templateUrl: 'logout.html'
})
export class LogoutPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}
  logout(){
    this.navCtrl.push(LogoutPage);
  }
  homepage() {
    this.navCtrl.push(HomePage);
  }
  aboutpage() {
    this.navCtrl.push(AboutPage);
  }
  contactpage() {
    this.navCtrl.push(ContactPage);
  }
}
