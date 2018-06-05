import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _appTitle: string;
  public currentDate: Date = new Date();

  constructor(private db: AngularFirestore) {

  }

  @Input()
  get appTitle(): string {
    return this._appTitle;
  }

  set appTitle(val: string) {
    this._appTitle = val;
  }

  ngOnInit() {
    this.db
    .collection('availableProducts')
    .valueChanges()
    .subscribe(result => {
      console.log(result);
    });
  }

}
