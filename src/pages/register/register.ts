import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  constructor(public navCtrl: NavController) { }
  registerUser() {
    alert('successfully register new user!');
  }
}
