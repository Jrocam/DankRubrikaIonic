import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SrvAsignaturaProvider } from '../../../providers/srv-asignatura/srv-asignatura';
/**
 * Generated class for the ModalRubricasExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-rubricas-exam',
  templateUrl: 'modal-rubricas-exam.html',
})
export class ModalRubricasExamPage {
  idasig;
  idexam;
  nombreExam;
  myParam: '';
  crear;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public srvdb: SrvAsignaturaProvider) {
    this.idasig = this.navParams.get('idasig');
    this.idexam = this.navParams.get('idexam');
    this.crear = this.navParams.get('crear');
    console.log("CreaR?!: " +this.crear);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRubricasExamPage');
  }

  crearExamen(){

    this.srvdb.pushExamen(this.idasig,this.myParam,this.nombreExam );
    this.navCtrl.pop();
  }
  updateExam(){
    this.srvdb.updateExamen(this.idasig,this.idexam,this.nombreExam,this.myParam);
    this.navCtrl.pop();
  }
  sendRubrica(id,rub){
    // this.srvAsig.sendExamen(this.idAsig,id,rub);
    // this.myParam = '';
  }

}
