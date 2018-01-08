import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <ul>
      <li *ngFor="let profile of profiles">
        <app-child [person]="profile" (selected)="showAlert($event)"></app-child>
      </li>
    </ul>
  `
})
export class ParentComponent {
  profiles = [
    { id: 1, name: 'Brad Green' },
    { id: 2, name: 'Igor Minar' },
    { id: 3, name: 'Jules Kremer' },
    { id: 4, name: 'Miško Hevery' },
    { id: 5, name: 'Rob Wormald' },
    { id: 6, name: 'Stephen Fluin'},
  ];

  constructor() { }

  showAlert(person: any) {
    alert(person.name);
  }
}
