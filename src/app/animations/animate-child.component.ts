import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, animateChild } from '@angular/animations';
 
@Component({
  selector: 'app-animate-child',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div class="elem" [@myTrigger]="animState">
        <div class="child" [@myChildTrigger]="animState"></div>
      </div>
      <button (click)="click()">Animate</button>
    </div>
  `,
  styles: [`
    .elem {
      width: 100px;
      height: 50px;
      padding: 50px;
      background-color: salmon;
    }
    .child {
      width: 100px;
      height: 50px;
      background-color: lime;
    }
  `],
  animations: [
    trigger('myTrigger', [
      transition('off => on', [
        animate('1s', style({
          height: '200px'
        })),
        query('@myChildTrigger', [
          animateChild()
        ])
      ])
    ]),
    trigger('myChildTrigger', [
      transition('off => on', [
        style({
          opacity: 0
        }),
        animate('0.5s', style({
          opacity: 1,
          height: '100px'
        }))
      ])
    ])
  ]
})
export class AnimateChildComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'animateChild';
    this.animState = 'off';
  }

  click() {
    if (this.animState === 'off') {
      this.animState = 'on';
      return;
    }
    this.animState = 'off';
  }
}
