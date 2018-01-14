import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-promise',
  template: `
    <p><button (click)="click1()">Promise Observable</button> {{message}}</p>
  `
})
export class PromiseComponent {
  message = '';

  constructor() { }

  click1() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Angular');
      }, 1000);
    });
    const observable = Observable.fromPromise(promise);
    observable.subscribe({
      next: (x) => {
        console.log(x);
        this.message += x;
      }
    });
  }
}
