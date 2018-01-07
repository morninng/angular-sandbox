import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-state2',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div *ngIf="animState" class="elem" [@myTrigger]="animState"></div>
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
      state('*', style({
        width: '200px',
        height: '200px'
      })),
      state('void', style({
        opacity: 0,
        width: '100px',
        height: '100px'
      })),
      transition('void => *', [
        animate('1s')
      ])
    ])
  ]
})
export class State2Component implements OnInit {
  title: string;
  animState: boolean;

  constructor() { }

  ngOnInit() {
    this.title = 'state2';
    this.animState = false;
  }

  click() {
    this.animState = !this.animState;
  }
}