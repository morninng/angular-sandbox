import { Component } from '@angular/core';

@Component({
  selector: 'app-export-as',
  template: `
    <app-counter #c="counter"></app-counter>
    <button (click)="c.decrement()">-1</button>
    <button (click)="c.increment()">+1</button>
  `
})
export class ExportAsComponent { }
