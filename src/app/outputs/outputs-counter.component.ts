import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputs-counter',
  template: `
    <button (click)="decrement()">-1</button>
    <button (click)="increment()">+1</button>
  `,
  outputs: [
    'changeCount'
  ]
})
export class OutputsCounterComponent {
  changeCount = new EventEmitter<number>();

  constructor() { }

  increment() {
    this.changeCount.emit(1);
  }

  decrement() {
    this.changeCount.emit(-1);
  }
}
