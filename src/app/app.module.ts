import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StoreModule } from '@ngrx/store' ;


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule,
         MatSidenavModule,
         MatButtonModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import {appReducer} from './app.reducer';
import {HeroService} from './hero.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forRoot({ui: appReducer})
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
