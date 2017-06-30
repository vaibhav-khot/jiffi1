import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRestPasswordPage } from './login-rest-password';

@NgModule({
  declarations: [
    LoginRestPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginRestPasswordPage),
  ],
  exports: [
    LoginRestPasswordPage
  ]
})
export class LoginRestPasswordPageModule {}
