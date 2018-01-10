import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-transition',
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
      height: 100px;
    }
  `],
  animations: [
    trigger('myTrigger', [
      state('from', style({
        height: '0px'
      })),
      state('to', style({
        height: '100px'
      })),
      transition('from => to', animate('1s'))
    ])
  ]
})
export class TransitionComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'transition';
    this.animState = 'from';
  }

  click() {
    if (this.animState === 'from') {
      this.animState = 'to';
      return;
    }
    this.animState = 'from';
  }
}
