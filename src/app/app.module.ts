import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AsignaturasPage} from '../pages/asignaturas/asignaturas';
import { EvaluacionesPage} from '../pages/evaluaciones/evaluaciones';
import { RubricasPage} from '../pages/rubricas/rubricas';
import { AsignaturaDetailPage } from '../pages/asignatura-detail/asignatura-detail';
import { RubricaDetailPage } from '../pages/rubrica-detail/rubrica-detail';

//MODALS
import { ModalAddCategoriaPage } from '../pages/modals/modal-add-categoria/modal-add-categoria';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SrvAsignaturaProvider } from '../providers/srv-asignatura/srv-asignatura';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBU1iUGJiyPzPDTv1P89ev5IEM2VFTnt64",
  authDomain: "dankrubrika.firebaseapp.com",
  databaseURL: "https://dankrubrika.firebaseio.com/",
  storageBucket: "",
  messagingSenderId: "609067141823"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AsignaturasPage,
    EvaluacionesPage,
    RubricasPage,
    AsignaturaDetailPage,
    RubricaDetailPage,
    ModalAddCategoriaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,  
    HomePage,
    AsignaturasPage,
    EvaluacionesPage,
    RubricasPage,
    AsignaturaDetailPage,
    RubricaDetailPage,
    ModalAddCategoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SrvAsignaturaProvider
  ]
})
export class AppModule {}
