import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-subject',
  template: `
    <p><button (click)="click1()">Observableの作成/購読</button> {{message1}}</p>
    <p><button (click)="click2()">Subjectの作成</button> {{message2}}</p>
    <p><button (click)="click3()">Subject Observable</button> {{message3}}</p>
  `
})
export class SubjectComponent {
  message1 = '';
  message2 = '';
  message3 = '';

  constructor() { }

  click1() {
    // Observableの作成
    const observable = Observable.create((observer: any) => {
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
    // Observableの購読
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

  click2() {
    // Subjectの作成
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

  click3() {
    // Subject Observable
    const subject = new Subject();
    subject.subscribe({
      next: (x) => {
        console.log(x);
        this.message3 += x;
      }
    });
    const observable = Observable.from(['Angular', 'デベロッパーズガイド']);
    observable.subscribe(subject);
  }
}
