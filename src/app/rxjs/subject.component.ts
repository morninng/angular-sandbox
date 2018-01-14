import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-subject',
  template: `
    <p>{{message1}}</p>
    <p>{{message2}}</p>
  `
})
export class SubjectComponent implements OnInit {
  message1 = '';
  message2 = '';

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
          observer.complete();
        }, 1000);
      });
      observable.subscribe({
        next: (str) => {
          console.log(str);
          this.message1 += str;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('デベロッパーズガイド');
          this.message1 += 'デベロッパーズガイド';
        }
      });
    }
    {
      const subject = new Subject();
      subject.subscribe({
        next: (x) => {
          console.log(x);
          this.message2 += x;
        }
      });
      subject.next('Angular');
      subject.next('デベロッパーズガイド');
    }
  }
}
