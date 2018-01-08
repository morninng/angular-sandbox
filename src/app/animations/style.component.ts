import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-style',
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
      height: 100px;
    }
  `],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({
          height: '0px'
        }),
        animate('1s', style({
          height: '100px'
        }))
      ])
    ])
  ]
})
export class StyleComponent implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'style';
  }

  click() {
    this.visible = !this.visible;
  }
}