import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotAnsPage } from './forgot-ans';

@NgModule({
  declarations: [
    ForgotAnsPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotAnsPage),
  ],
  exports: [
    ForgotAnsPage
  ]
})
export class ForgotAnsPageModule {}
