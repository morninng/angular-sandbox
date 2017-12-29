import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
  <div>
    <input type="text" [(ngModel)]="model">
    <p>{{model}}</p>
  </div>
  `
})
export class TwoWayComponent {
  model = 'two way binding!';
}
