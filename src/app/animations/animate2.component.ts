import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animate2',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div *ngIf="visible" class="elem" [@myTrigger]></div>
      <button (click)="click()">Animate</button>
    </div>
  `,
  styles: [`
    .elem {
      width: auto;
      height: 100px;
      background-color: salmon;
    }
  `],
  animations: [
    trigger('myTrigger', [
      state('void', style({
        height: '0px'
      })),
      state('*', style({
        height: '100px'
      })),
      transition(':enter', [
        animate('1s 100ms ease-in')
      ])
    ])
  ]
})
export class Animate2Component implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'animate2';
  }

  click() {
    this.visible = !this.visible;
  }
}
