import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'settings-dialog',
  template: `
  <label>Would you like dog pics every min?</label>
  <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialog {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dogs = [
    { rows: 2, name: "Mal", human: "Jeremy", age: 5},
    { rows: 2, name: "Molly", human: "Alex", age: 5},
    { rows: 2, name: "Sophie", human: "Igor", age: 5},
    { rows: 2, name: "Porter", human: "Jeremy", age: 5},
    { rows: 2, name: "Kobe", human: "Stephen", age: 5},
    { rows: 2, name: "Cinny", human: "Jeremy", age: 5},
    { rows: 2, name: "Aaaa", human: "Jeremy", age: 5},
  ];

  @ViewChild('sidenav') sidenav: MdSidenav;
  currentDog = {};

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) { }
  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }

  showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }
}
