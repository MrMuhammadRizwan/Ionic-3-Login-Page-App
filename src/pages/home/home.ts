import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }
  loginUser() {
    let toast = this.toastCtrl.create({
      message: 'User login successfully',
      duration: 3000
    });
    toast.present();
  }
}
