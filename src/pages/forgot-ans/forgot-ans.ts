import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChangePassPage } from '../change-pass/change-pass';

/**
 * Generated class for the ForgotAnsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgot-ans',
  templateUrl: 'forgot-ans.html',
})
export class ForgotAnsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotAnsPage');
  }

  forgetAns() {

  }
  faSignIn() {
    this.navCtrl.push(ChangePassPage);
  }

}
