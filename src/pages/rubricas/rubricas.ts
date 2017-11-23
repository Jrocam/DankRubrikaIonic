import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
//PROVIDERS
import { SrvAsignaturaProvider } from '../../providers/srv-asignatura/srv-asignatura';
import { RubricaDetailPage } from '../rubrica-detail/rubrica-detail';
/**
 * Generated class for the RubricasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rubricas',
  templateUrl: 'rubricas.html',
})
export class RubricasPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public srvAsig: SrvAsignaturaProvider,
    public alertCtrl: AlertController
  ) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RubricasPage');
  }
  irOtraPagina(nom, id){
    console.log("¿id?: "+id);
    this.navCtrl.push(RubricaDetailPage , { nombreRub: nom , idRub: id} )
  }
  crearRubrica(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Crear Rúbrica',
      message: "Agrega una nueva rúbrica.",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'nombre'
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
            this.srvAsig.pushRubrica(data.Nombre);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }
  updateRubrica(id){
    let newTaskModal = this.alertCtrl.create({
      title: 'Editar Rúbrica',
      message: "edita tu rúbrica.",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'nuevo nombre'
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
            this.srvAsig.updateRubrica(id,data.Nombre);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }
  borrarRubrica(id){
    this.srvAsig.deleteRubrica(id);
  }
  
}
