import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DirectoryPage } from '../directory/directory';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 username= 'mrizo';
 password='admin';
 uname = '';
 upass='';
  private todo: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder
  ) {}
  
  loginUser(form:any) {
    
    console.log(this.uname)
    console.log(this.upass)
    
    
    let username = this.username;
    let password = this.password;
    // let uname = '';
    // let upass = '';
    // if (uname != username && upass!=password){
    //   alert('incorrect username/password')
    // }
    // else{
    //   alert('successfully login!')
    // }
    // let toast = this.toastCtrl.create({
    //   message: 'User login successfully',
    //   duration: 3000
    // });
    // toast.present();
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
