import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-transition3',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div class="elem" [@myTrigger]="count">{{count}}</div>
      <button (click)="decrement()">-</button>
      <button (click)="increment()">+</button>
    </div>
  `,
  styles: [`
    .elem {
      font-size: 20px;
    }
  `],
  animations: [
    trigger(':increment', [
      style({
        opacity: 0,
      }),
      animate(100, style({
        opacity: 1,
        transform: 'translateY(-30%)'
      }))
    ]),
    transition(':decrement', [
      style({
        opacity: 0,
      }),
      animate(100, style({
        opacity: 1,
        transform: 'translateY(30%)'
      }))
    ])
  ]
})
export class Transition3Component implements OnInit {
  title: string;
  count: 0;

  constructor() { }

  ngOnInit() {
    this.title = 'transition';
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}