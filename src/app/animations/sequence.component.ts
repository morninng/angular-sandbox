import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, sequence, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sequence',
  template: `
    <div>
      <h2>Hello {{title}}</h2>
      <div class="elem" [@myTrigger]="animState"></div>
      <button (click)="click()">Animate</button>
    </div>
  `,
  styles: [`
    .elem {
      width: 200px;
      height: 100px;
      background-color: salmon;
    }
  `],
  animations: [
    trigger('myTrigger', [
      transition('off => on', [
        group([
          sequence([
            style({
              opacity: 1
            }),
            animate('1s', style({
              opacity: 0.5
            })),
            animate('1s', style({
              width: '100px'
            }))
          ]),
          animate('2s', style({
            height: '200px'
          }))
        ])
      ])
    ])
  ]
})
export class SequenceComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'sequence';
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