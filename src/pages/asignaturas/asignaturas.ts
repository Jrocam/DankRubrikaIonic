import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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

  searchQuery: string = '';
  items;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public srvAsig: SrvAsignaturaProvider,
    public alertCtrl: AlertController
  ) {
    console.log(this.srvAsig.asignaturas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsignaturasPage');
  }

  irOtraPagina(nom, id){
    console.log("¿id?: "+id);
    this.navCtrl.push(AsignaturaDetailPage , { nombreAsig: nom , idAsig: id} )
  }
  crearAsignatura(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Crear Asignatura',
      message: "Agrega una nueva asignatura.",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'nombre asignatura'
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
            this.srvAsig.setAsignatura(data.Nombre);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }
  borrarAsignatura(id){
    this.srvAsig.removeAsignatura(id);
  }
  updateAsignatura(id){
    let newTaskModal = this.alertCtrl.create({
      title: 'Editar Asignatura',
      message: "edita tu asignatura.",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'nombre asignatura'
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
            this.srvAsig.updateAsignatura(id,data.Nombre);
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }
}
