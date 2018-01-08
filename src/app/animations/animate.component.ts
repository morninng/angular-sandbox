import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-animate',
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
      transition(':enter', [
        style({
          height: '0px'
        }),
        animate('1s 100ms ease-in', style({
          height: '100px'
        }))
      ])
    ])
  ]
})
export class AnimateComponent implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'animate';
  }

  click() {
    this.visible = !this.visible;
  }
}