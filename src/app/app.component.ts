import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dogs = [
    { rows: 2, name: "Mal", human: "Jeremy", age: 5},
    { rows: 1, name: "Molly", human: "Alex", age: 5},
    { rows: 1, name: "Sophie", human: "Igor", age: 5},
    { rows: 2, name: "Porter", human: "Jeremy", age: 5},
    { rows: 1, name: "Kobe", human: "Stephen", age: 5},
    { rows: 1, name: "Cinny", human: "Jeremy", age: 5},
    { rows: 1, name: "Mal", human: "Jeremy", age: 5},
  ];

  @ViewChild('sidenav') sidenav: MdSidenav;
  currentDog = {};

  showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }
}
