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

  asignaturasRef: AngularFireList<any>;
  asignaturas: Observable<any[]>;

  alumnosRef: AngularFireList<any>;
  alumnos: Observable<any[]>;
  nuevoAlumnoRef: AngularFireObject<any>;

  evaluacionesRef: AngularFireList<any>;
  evaluaciones: Observable<any[]>;
  nuevaEvaluacionRef: AngularFireObject<any>;

  constructor(public database: AngularFireDatabase) {
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
  public deleteExamen(asignaturaID: string, examID: string){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/examenes/'+examID);
    this.nuevaEvaluacionRef.remove();
  }
  public updateExamen(asignaturaID: string, examID: string,rubrica: string){
    this.nuevaEvaluacionRef = this.database.object('users/Test/asignaturas/'+asignaturaID+'/examenes/'+examID);
    this.nuevaEvaluacionRef.update({idrubrica: rubrica})
  }

}
