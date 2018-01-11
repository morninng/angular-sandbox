import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-transition2',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div *ngIf="visible" class="elem" @myTrigger></div>
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
      state('void', style({
        height: '0px'
      })),
      transition(':enter', animate('1s')),
      transition(':leave', animate('1s'))
    ])
  ]
})
export class Transition2Component implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'transition2';
  }

  click() {
    this.visible = !this.visible;
  }
}
