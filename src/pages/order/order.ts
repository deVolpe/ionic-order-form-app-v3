import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  inputLabels: string[] = [
    'First Name',
    'Last Name',
    'Email Address',
    'Mobile Phone Number',
    'Address',
    'City',
    'Country',
    'State/Province',
    'Postal Code'
  ];

  isSubmitted: boolean = false;

  constructor(private toastController: ToastController) {}

  presentToast() {
    const toast = this.toastController.create({
      message: 'Success',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
