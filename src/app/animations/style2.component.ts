import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-style2',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div *ngIf="visible" class="elem" [@myTrigger]>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <button (click)="click()">Animate</button>
    </div>
  `,
  styles: [`
    .elem {
      width: 200px;
      height: auto;
      background-color: salmon;
      overflow: hidden;
    }
  `],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({
          height: '0px'
        }),
        animate('1s', style({
          height: '*'
        }))
      ])
    ])
  ]
})
export class Style2Component implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'style2';
  }

  click() {
    this.visible = !this.visible;
  }
}
