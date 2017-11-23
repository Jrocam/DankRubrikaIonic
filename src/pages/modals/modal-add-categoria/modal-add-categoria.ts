import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SrvAsignaturaProvider } from '../../../providers/srv-asignatura/srv-asignatura';
/**
 * Generated class for the ModalAddCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-add-categoria',
  templateUrl: 'modal-add-categoria.html',
})
export class ModalAddCategoriaPage {
  idrub;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public srvdb: SrvAsignaturaProvider,) {
      this.idrub = this.navParams.get('idrub');
  }
  // agregarFilaCompleta(){
  //   this.srvdb.pushFila(this.idrub,data.NombreEle,data.PesoEle,data.Niv1,data.Niv2,data.Niv3,
  //     data.Niv4, data.NombreCat,data.PesoCat);
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddCategoriaPage');
  }

}
