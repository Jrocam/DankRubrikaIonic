import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AsignaturaDetailPage } from '../asignatura-detail/asignatura-detail';
//PROVIDERS
import { SrvAsignaturaProvider } from '../../providers/srv-asignatura/srv-asignatura';


/**
 * Generated class for the AsignaturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-asignaturas',
  templateUrl: 'asignaturas.html',
})
export class AsignaturasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public srvAsig: SrvAsignaturaProvider) {
    console.log(this.srvAsig.asignaturas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsignaturasPage');
  }

  irOtraPagina(p){
    this.navCtrl.push(AsignaturaDetailPage , { nombreAsig: p} )
  }

}
