import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject } from 'angularfire2/database/interfaces';

/*
  Generated class for the SrvAsignaturaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class SrvAsignaturaProvider {

  //ASIGNATURAS
  asignaturasRef: AngularFireList<any>;
  asignaturas: Observable<any[]>;

  alumnosRef: AngularFireList<any>;
  alumnos: Observable<any[]>;
  nuevoAlumnoRef: AngularFireObject<any>;

  evaluacionesRef: AngularFireList<any>;
  evaluaciones: Observable<any[]>;
  nuevaEvaluacionRef: AngularFireObject<any>;
  //RUBRICAS
  rubricasRef: AngularFireList<any>;
  rubricas: Observable<any[]>;
  rubricaObj: AngularFireObject<any>;

  //TABLAS
  filasRef: AngularFireList<any>;
  filas: Observable<any[]>;
  filaObj: AngularFireObject<any>;


  constructor(public database: AngularFireDatabase) {
    this.getAsignaturas();
    this.getRubricas();
  }

  //---------------------------ASIGNATURAS CRUD ---------------------------------------------------
  public getAsignaturas(){
    this.asignaturasRef = this.database.list('users/Test/asignaturas');
    this.asignaturas = this.asignaturasRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  public setAsignatura(nombre: string){
    this.asignaturasRef = this.database.list('users/Test/asignaturas');
    this.asignaturasRef.push(
      { nombre: nombre }
    );
  }
  public updateAsignatura(asignaturaID: string, nom: string){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID);
    this.nuevaEvaluacionRef.update({nombre: nom})
  }
  public removeAsignatura(asignaturaID: string){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID);
    this.nuevaEvaluacionRef.remove();
  }
  //---------------------------ASIGNATURAS-DETAIL CRUD ---------------------------------------------------
  public getAlumnos(asignaturaID: string){
    this.alumnosRef = this.database.list('users/Test/asignaturas/'+asignaturaID+'/roster');
    this.alumnos = this.alumnosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
    return this.alumnos;
  }

  public setAlumno(asignaturaID: string, alumnoID: string, nombre: string, user: string){
    this.nuevoAlumnoRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/roster/'+alumnoID);
    this.nuevoAlumnoRef.set(
      { nombre: nombre,
        user: user
      }
    );
  }
  public deleteAlumno(asignaturaID: string, alumnoID: string){
    this.nuevoAlumnoRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/roster/'+alumnoID);
    this.nuevoAlumnoRef.remove();
  }

  public getExamenes(asignaturaID: string){
    this.evaluacionesRef = this.database.list('users/Test/asignaturas/'+asignaturaID+'/examenes');
    this.evaluaciones = this.evaluacionesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
    return this.evaluaciones;
  }
  public setExamen(asignaturaID: string, examID: string, rubrica: string, nombre: string){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/examenes/'+examID);
    this.nuevaEvaluacionRef.set(
      { idrubrica: rubrica,
        nombre: nombre
      }
    );
  }
  public pushExamen(asignaturaID,rubrica,nombre){
    this.evaluacionesRef = this.database.list('users/Test/asignaturas/'+asignaturaID+'/examenes');
    this.evaluacionesRef.push({ idrubrica: rubrica, nombre: nombre});
  }
  public deleteExamen(asignaturaID: string, examID: string){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/examenes/'+examID);
    this.nuevaEvaluacionRef.remove();
  }
  public updateExamen(asignaturaID, examID, nombre, rubrica){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/examenes/'+examID);
    this.nuevaEvaluacionRef.update({nombre: nombre, idrubrica: rubrica});
  }
  public sendExamen(asignaturaID,examID,rubrica){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/examenes/'+examID);
    this.nuevaEvaluacionRef.update({idrubrica: rubrica});
  }
  //---------------------------RUBRICAS CRUD ---------------------------------------------------
  public getRubricas(){
    this.rubricasRef = this.database.list('users/Test/rubricas');
    this.rubricas = this.rubricasRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  public pushRubrica(name){
    this.rubricasRef.push(
      {nombre: name }
    );
  }
  public updateRubrica(id, name){
    this.rubricaObj = this.database.object('users/Test/rubricas/'+id);
    this.rubricaObj.update({nombre: name});
  }
  public deleteRubrica(id){
    this.rubricaObj = this.database.object('users/Test/rubricas/'+id);
    this.rubricaObj.remove();
  }
  //---------------------------RUBRICA DETAIL CRUD ---------------------------------------------------
  public getFilas(idrub){
    this.filasRef = this.database.list('users/Test/rubricas/'+idrub+'/Filas');
    this.filas = this.filasRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  public pushFila(idrub,elem,pele,n1,n2,n3,n4,cat?,pcat?){
    this.filasRef = this.database.list('users/Test/rubricas/'+idrub+'/Filas');
    if(cat && pcat){
      console.log('SOY COMPLETO '+cat)
      this.filasRef.push(
        {
          categoria: cat,
          catpeso: pcat,
          elemento: elem,
          elepeso: pele,
          n1: n1,
          n2: n2,
          n3: n3,
          n4: n4
        }
      );
    }else{
      console.log('NO SOY COMPLETO')
      this.filasRef.push(
        {
          categoria: ' ',
          catpeso: ' ',
          elemento: elem,
          elepeso: pele,
          n1: n1,
          n2: n2,
          n3: n3,
          n4: n4
        }
      );
    }
  }

}
