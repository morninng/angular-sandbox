import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-state',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div class="elem" [@myTrigger]="animState"></div>
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
      state('off', style({
        width: '200px',
        height: '100px'
      })),
      state('on', style({
        opacity: 0.5,
        width: '100px',
        height: '200px'
      })),
      transition('off => on', [
        animate('1s')
      ])
    ])
  ]
})
export class StateComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'state';
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
