import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs-counter',
  template: '<p>{{count}}</p>',
  inputs: [
    'count'
  ]
})
export class InputsCounterComponent {
  count: number;

  constructor() { }
}
