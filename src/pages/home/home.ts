import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsignaturasPage} from '../asignaturas/asignaturas';
import { EvaluacionesPage} from '../evaluaciones/evaluaciones';
import { RubricasPage} from '../rubricas/rubricas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: any =[
    {'name':'Asignaturas','page':AsignaturasPage,'img':'assets/imgs/salonclase.jpg','cuenta':'15'},
    {'name':'Evaluaciones','page':EvaluacionesPage,'img':'assets/imgs/salonclase.jpg','cuenta':'4'},
    {'name':'Rubricas','page':RubricasPage,'img':'assets/imgs/salonclase.jpg','cuenta':'12'}
  ]
  constructor(public navCtrl: NavController) {

  }
  openPage(p) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(p.page);
  }
}
