import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Tabs } from 'ionic-angular';

import {
  BuildParamService
} from 'sunbird';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  private questionsBaseUrl = '';
  url: any;
  tabIndex: number;

  options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'no',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only  
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public translate: TranslateService, 
    public theInAppBrowser: InAppBrowser,
    public sanitize: DomSanitizer,
    public app: App,
    public tabRef: Tabs,
    private buildParamService: BuildParamService
    ) {
      this.getBaseURL();
  }

  ionViewDidLoad() {
    
  }  

  ionViewWillEnter() {
    this.url = this.sanitize.bypassSecurityTrustResourceUrl(this.questionsBaseUrl);
  }

  getBaseURL() {
    this.buildParamService.getBuildConfigParam('QUESTIONS_BASE_URL')
      .then(response => {
        this.questionsBaseUrl = response;
      })
      .catch((error) => {
        console.error('Error Occurred=> ', error);
      });
  }
}
