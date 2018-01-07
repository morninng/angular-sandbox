import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{count}}</p>
    <button (click)="decrement()">-1</button>
    <button (click)="increment()">+1</button>
  `
})
export class CounterComponent {
  @Input() count: number;
  @Output() changeCount = new EventEmitter<number>();

  constructor() { }

  increment() {
    this.changeCount.emit(1);
  }

  decrement() {
    this.changeCount.emit(-1);
  }
}
