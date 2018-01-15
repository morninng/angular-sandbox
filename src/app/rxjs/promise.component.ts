import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-promise',
  template: `
    <p><button (click)="click1()">Promise Observable</button> {{message1}}</p>
    <p><button (click)="click2()">Observable Promise</button> {{message2}}</p>
  `
})
export class PromiseComponent {
  message1 = '';
  message2 = '';

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
        this.message1 += x;
      }
    });
  }

  click2() {
    const promise = Observable
      .of('Angular')
      .toPromise();
    promise.then((x) => {
      console.log(x);
      this.message2 += x;
    });
  }
}
