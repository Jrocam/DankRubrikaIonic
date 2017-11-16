import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AsignaturaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-asignatura-detail',
  templateUrl: 'asignatura-detail.html',
})
export class AsignaturaDetailPage {

  nombreAsig: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombreAsig = this.navParams.get('nombreAsig');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsignaturaDetailPage');
  }

}
