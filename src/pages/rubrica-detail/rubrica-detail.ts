import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RubricaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rubrica-detail',
  templateUrl: 'rubrica-detail.html',
})
export class RubricaDetailPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  filas: any = [
    {name: 'Categoria', icon:'1',elem:'Elemento', stuff:'lineaa sdasda sldkal skdlas. as lasd asd'}, {name: '2', icon:'una', stuff:'linea'}
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad RubricaDetailPage');
  }

}
