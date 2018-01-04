import { Component } from '@angular/core';

@Component({
  selector: 'app-outputs',
  template: `
    <h2>Outputs</h2>
    <p>{{count}}</p>
    <app-outputs-counter (changeCount)="change($event)"></app-outputs-counter>
  `
})
export class OutputsComponent {
  count = 0;

  constructor() { }

  change(value: number) {
    this.count += value;
  }
}
