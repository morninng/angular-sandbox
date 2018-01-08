import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-keyframes',
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
        animate('4s', keyframes([
          style({
            width: '100px',
            offset: 0.25
          }),
          style({
            opacity: 0.5,
            height: '200px',
            offset: 0.75
          }),
          style({
            opacity: 1,
            width: '*',
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class KeyframesComponent implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'keyframes';
  }

  click() {
    this.visible = !this.visible;
  }
}