import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-container',
  template: `
    <app-counter
      [count]="count"
      (changeCount)="change($event)">
    </app-counter>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterContainerComponent implements OnInit {
  count: number;

  ngOnInit() {
    this.count = Math.floor((Math.random() * 10));
  }

  change(value: number) {
    this.count += value;
  }

  reset() {
    this.count = 0;
  }
}
