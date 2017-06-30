import { Component } from '@angular/core';
import { IonicPage, 
          NavController, 
          NavParams, 
          MenuController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { LoginRestPasswordPage } from '../login-rest-password/login-rest-password';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user:any = {
    clientID: "",
    password:""
  }
icon:any = "eye";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false, 'loggedInMenu');
  }

  forgetPass() {
    this.navCtrl.push(LoginRestPasswordPage);
  }

  signIn() {
    if(this.user.clientID == "0" && this.user.password == "0" )
      this.navCtrl.setRoot(DashboardPage)
    else {
      alert("User:'0' Pass:'0'")
    }
  }
  
  showHidePass() {
    if(this.icon == 'eye' )
    this.icon = "eye-off";
    else 
    this.icon = "eye";  
  }
}
