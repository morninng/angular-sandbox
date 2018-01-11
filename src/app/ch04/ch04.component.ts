import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch04',
  template: `
    <h1 ch04Attr>Hello Componennt</h1>
    <p>{{message}}</p>
  `
})
export class Ch04Component implements OnInit {
  message: string;
  constructor() {
     this.message = 'Hello from constructor.';
     console.log(this.message);
  }
  ngOnInit() {

    this.message = 'Hello from ngOnInit.';
    console.log(this.message);
  }
}
