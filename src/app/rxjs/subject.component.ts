import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-subject',
  template: `<p>{{message}}</p>`
})
export class SubjectComponent implements OnInit {
  message = '';

  constructor() { }

  ngOnInit() {
    {
      const observable = Observable.create((observer:any) => {
        observer.next('A');
        observer.next('n');
        observer.next('g');
        observer.next('u');
        observer.next('l');
        observer.next('a');
        setTimeout(() => {
          observer.next('r');
        }, 1000);
      });
      observable.subscribe({
        next: (str) => {
          console.log(str);
          this.message += str;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('デベロッパーズガイド');
          this.message += 'デベロッパーズガイド';
        }
      });
    }
  }
}
