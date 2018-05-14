import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html'
})
export class DirectoryPage {
  constructor(public navCtrl: NavController) { }
  registerUser() {
    alert('Successfully add new directory!');
  }
}
