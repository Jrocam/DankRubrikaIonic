import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, ModalController  } from 'ionic-angular';
//PROVIDERS
import { SrvAsignaturaProvider } from '../../providers/srv-asignatura/srv-asignatura';
import { ModalAddCategoriaPage } from '../modals/modal-add-categoria/modal-add-categoria';

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

  idrub;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public srvdb: SrvAsignaturaProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController 
  ) {
    this.idrub = this.navParams.get('idRub');
    this.srvdb.getFilas(this.navParams.get('idRub'))
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RubricaDetailPage');
  }

  AddCategoriaModal() {
    let myModal = this.modalCtrl.create(ModalAddCategoriaPage, {idrub: this.idrub,completo: true});
    myModal.present();
  }
  AddElementoModal() {
    let myModal = this.modalCtrl.create(ModalAddCategoriaPage, {idrub: this.idrub,completo: false});
    myModal.present();
  }

}
