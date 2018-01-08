import { Component, OnInit } from '@angular/core';
import { trigger, transition, sequence, animate, style, group } from '@angular/animations';

@Component({
  selector: 'app-group',
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
        sequence([
          animate('1s', style({
            width: '100px'
          })),
          group([
            animate('2s', style({
              height: '200px'
            })),
            animate('0.5s', style({
              opacity: 0.5
            }))
          ]),
          animate('1s', style({
            width: '*',
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class GroupComponent implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'group';
  }

  click() {
    this.visible = !this.visible;
  }
}
