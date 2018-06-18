import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Hero } from './hero';
import * as fromApp from './app.reducer'

@Injectable()

export class HeroService {

  constructor(
    private db: AngularFirestore,
    private store: Store<{ui: fromApp.State}>
  ) {}

  getHeroes() {
    this.store.dispatch({type: 'START_LOADING'});
    this.db
    .collection('availableProducts')
    .valueChanges()
    .subscribe(result => {
      console.log(result);
      this.store.dispatch({type: 'STOP_LOADING'});
    });
  }
}
