import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-with-setter',
  template: `
    <h2>Counter with setter</h2>
    <p>{{count}}</p>
    <button (click)="decrement()">-1</button>
    <button (click)="increment()">+1</button>
  `
})
export class CounterWithSetterComponent {
  private _count: number;

  @Output() changeCount = new EventEmitter();

  constructor() { }

  @Input()
  set count(count: number) {
    this._count = count + 3;
  }

  get count() {
    return this._count;
  }

  increment() {
    this.changeCount.emit(1);
  }

  decrement() {
    this.changeCount.emit(-1);
  }
}