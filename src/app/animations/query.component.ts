import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-query',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div class="elem" [@myTrigger]="animState">
        <h3 class="title">Title</h3>
        <div class="contents">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="contents">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </div>
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
    .contents {
      height: auto;
    }
  `],
  animations: [
    trigger('myTrigger', [
      transition('off => on', [
        query('.contents', style({
          opacity: 0
        }), { limit: 1 }),
        query(':self', [
          style({
            height: 0
          }),
          animate(1000, style({
            height: '*'
          }))
        ]),
        query('.contents', animate(1500, style({
          opacity: 1
        })))
      ])
    ])
  ]
})
export class QueryComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'query';
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
