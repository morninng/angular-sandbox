import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';

import { externalAnimation } from './external-animation';

@Component({
  selector: 'app-use-animation',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div *ngIf="visible" class="elem" [@myTrigger]></div>
      <button (click)="click()">Animate</button>
    </div>
  `,
  styles: [`
    .elem {
      background-color: salmon;
    }
  `],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({
          opacity: 0,
          width: '200px',
          height: '100px'
        }),
        useAnimation(externalAnimation)
      ])
    ])
  ]
})
export class UseAnimationComponent implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'useAnimation';
  }

  click() {
    this.visible = !this.visible;
  }
}
