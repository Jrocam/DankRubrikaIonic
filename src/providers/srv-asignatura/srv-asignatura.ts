import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SrvAsignaturaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class SrvAsignaturaProvider {

  asignaturasRef: AngularFireList<any>;
  asignaturas: Observable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.asignaturasRef = this.database.list('users/Test/asignaturas');
    this.asignaturas = this.asignaturasRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

}
