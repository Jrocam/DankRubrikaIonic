import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
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
  completo;
  texto;

  //inputs
  nomcat;
  pescat;
  nomele;
  pesele;
  niv1;
  niv2;
  niv3;
  niv4;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public srvdb: SrvAsignaturaProvider,public loadingCtrl: LoadingController) {
      this.idrub = this.navParams.get('idrub');
      this.completo = this.navParams.get('completo');
      if(this.completo){
        this.texto = 'una nueva categoría';
      }else{
        this.texto = 'un nuevo elemento';
      }
  }
  agregarFilaCompleta(){
    this.srvdb.pushFila(this.idrub,this.nomele,this.pesele,this.niv1,this.niv2,this.niv3,
      this.niv4, this.nomcat,this.pescat);

    this.navCtrl.pop();
  }

  agregarElemento(){
    this.srvdb.pushFila(this.idrub,this.nomele,this.pesele,this.niv1,this.niv2,this.niv3,
      this.niv4);

    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddCategoriaPage');
  }

}
