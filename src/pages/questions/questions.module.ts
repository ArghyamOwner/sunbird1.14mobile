import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionsPage } from './questions';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    QuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionsPage),
    TranslateModule.forChild()
  ],
  providers: [
    InAppBrowser
  ]
})
export class QuestionsPageModule {}
