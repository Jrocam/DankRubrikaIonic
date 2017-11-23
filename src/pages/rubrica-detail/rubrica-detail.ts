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

  openAddCategoriaModal() {
    let myModal = this.modalCtrl.create(ModalAddCategoriaPage, {idrub: this.idrub});
    myModal.present();
  }

  agregarFilaCompleta(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Añadir Categoría',
      message: "añade una categoría con su elemento principal.",
      inputs: [
        {
          name: 'NombreCat',
          placeholder: 'nombre categoria'
        },
        {
          name: 'PesoCat',
          placeholder: 'peso categoria ej: 25'
        },
        {
          name: 'NombreEle',
          placeholder: 'nombre elemento principal'
        },
        {
          name: 'PesoEle',
          placeholder: 'peso elemento ej: 18'
        },
        {
          name: 'Niv1',
          placeholder: 'caracteríasticas deficiente...'
        },
        {
          name: 'Niv2',
          placeholder: 'caracteríasticas regular...'
        },
        {
          name: 'Niv3',
          placeholder: 'caracteríasticas Bueno...'
        },
        {
          name: 'Niv4',
          placeholder: 'caracteríasticas Excelente...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(data.NombreCat);
            console.log(data.PesoCat);
            this.srvdb.pushFila(this.idrub,data.NombreEle,data.PesoEle,data.Niv1,data.Niv2,data.Niv3,
              data.Niv4, data.NombreCat,data.PesoCat);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }

}
