import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:any;
  password:any;
  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
  
  login()
  {
    if(this.username!=null && this.password!=null)
    {
      window.localStorage.setItem("loggedIN","true");
      this.navCtrl.setRoot(TabsPage);
    }
    else{
      this.presentToast("Please enter username and password.");
    }

  }
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
