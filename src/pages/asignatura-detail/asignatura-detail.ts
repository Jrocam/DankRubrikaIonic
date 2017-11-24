import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ModalController } from 'ionic-angular';


import { SrvAsignaturaProvider } from '../../providers/srv-asignatura/srv-asignatura';
import { ModalRubricasExamPage } from '../modals/modal-rubricas-exam/modal-rubricas-exam';
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
  seccion: string = "alumnos";
  nombreAsig: string;
  idAsig: string;
  myParam: '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public srvAsig: SrvAsignaturaProvider, 
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ){
    this.srvAsig.getAlumnos(this.navParams.get('idAsig'));
    this.srvAsig.getExamenes(this.navParams.get('idAsig'));
    this.nombreAsig = this.navParams.get('nombreAsig');
    this.idAsig = this.navParams.get('idAsig');
    //console.log("nombreAsig?: "+this.nombreAsig);
    //console.log("idAsig?: "+this.idAsig);
  }

  testRadioOpen = false;
  testRadioResult: any;

  ionViewWillEnter() {
    console.log('ionViewWillEnter AsignaturaDetailPage');
  }
  AddRubricaModal(id) {
    let myModal = this.modalCtrl.create(ModalRubricasExamPage, {idasig: this.idAsig,idexam: id, crear: true });
    myModal.present();
  }
  updateRubricaModal(id) {
    let myModal = this.modalCtrl.create(ModalRubricasExamPage, {idasig: this.idAsig,idexam: id, crear: false });
    myModal.present();
  }
  public crearAlumno(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Agregar alumno',
      message: "Agregar nuevo alumno",
      inputs: [
        {
          name: 'IDalumno',
          placeholder: '200060189'
        },
        {
          name: 'Nombre',
          placeholder: 'Juancho'
        },
        {
          name: 'Usuario',
          placeholder: 'juancho@uninorte.edu.co'
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
          text: 'Crear',
          handler: data => {
            this.srvAsig.setAlumno(this.idAsig,data.IDalumno,data.Nombre,data.Usuario);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }

  removeAlumn(d){
    this.srvAsig.deleteAlumno(this.idAsig,d);
  }
  removeExam(d){
    this.srvAsig.deleteExamen(this.idAsig,d);
  }
  

  public getNewExamID(nomexam: string){

    let re = /\s/g;
    let result = nomexam.replace(re,"");

    console.log("regex??:"+ result );
    return result;
  }
}
