import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<p>{{count}}</p>',
  exportAs: 'counter'
})
export class CounterComponent implements OnInit {
  count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
