import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  template: `
    <h2>Inputs</h2>
    <app-inputs-counter [count]="count"></app-inputs-counter>
  `
})
export class InputsComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.count ++, 1000);
  }
}
