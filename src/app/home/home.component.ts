import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _appTitle: string;
  public currentDate: Date = new Date();



  @Input()
  get appTitle(): string {
    return this._appTitle;
  }

  set appTitle(val: string) {
    this._appTitle = val;
  }

  ngOnInit() {
  
  }

}
