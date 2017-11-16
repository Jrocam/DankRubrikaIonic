import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


import { SrvAsignaturaProvider } from '../../providers/srv-asignatura/srv-asignatura';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public srvAsig: SrvAsignaturaProvider, 
    public alertCtrl: AlertController
  ){
    this.srvAsig.getAlumnos(this.navParams.get('idAsig'));
    this.srvAsig.getExamenes(this.navParams.get('idAsig'));
    this.nombreAsig = this.navParams.get('nombreAsig');
    this.idAsig = this.navParams.get('idAsig');



    //console.log("nombreAsig?: "+this.nombreAsig);
    //console.log("idAsig?: "+this.idAsig);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter AsignaturaDetailPage');
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

  public crearExamen(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Agregar Evaluación',
      message: "Agregar nueva evaluación",
      inputs: [
        {
          name: 'Rubrica',
          placeholder: 'Rúbrica id'
        },
        {
          name: 'Nombre',
          placeholder: 'Nombre examen'
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
            this.srvAsig.setExamen(this.idAsig,this.getNewExamID(data.Nombre),data.Rubrica,data.Nombre);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }
  removeExam(d){
    this.srvAsig.deleteExamen(this.idAsig,d);
  }
  updateExam(id){
    let newTaskModal = this.alertCtrl.create({
      title: 'Editar Evaluación',
      message: "Edita la rúbrica del examen",
      inputs: [
        {
          name: 'Rubrica',
          placeholder: 'Nueva rúbrica id'
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
            this.srvAsig.updateExamen(this.idAsig,id,data.Rubrica);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }

  public getNewExamID(nomexam: string){

    let re = /\s/g;
    let result = nomexam.replace(re,"");

    console.log("regex??:"+ result );
    return result;
  }
}
