import { Component } from '@angular/core';
import { NavController,App  } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public app: App) {

  }
  logout()
  {
    window.localStorage.removeItem("loggedIN");
    this.app.getRootNav().setRoot(LoginPage);
  }
}
