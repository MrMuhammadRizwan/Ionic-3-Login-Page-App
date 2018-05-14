import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DirectoryPage } from '../directory/directory';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
   }
  loginUser() {
    let toast = this.toastCtrl.create({
      message: 'User login successfully',
      duration: 3000
    });
    toast.present();
  }
  register() {
    this.navCtrl.push(DirectoryPage);
  }
}
