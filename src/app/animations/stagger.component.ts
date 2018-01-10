import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-stagger',
  template: `
    <div>
      <h2>{{title}}</h2>
      <div [@myTrigger]="items.length">
        <div *ngFor="let item of items">{{item}}</div>
      </div>
      <button (click)="clickShow()">Show</button>
      <button (click)="clickRemove()">Remove</button>
    </div>
  `,
  animations: [
    trigger('myTrigger', [
      transition('0 => *', [
        query(':enter', [
          style({
            transform: 'translateX(-100%)'
          }),
          stagger(100, animate(500, style({
            transform: 'translateX(0)'
          })))
        ])
      ])
    ])
  ]
})
export class StaggerComponent implements OnInit {
  title: string;
  items = [];

  constructor() { }

  ngOnInit() {
    this.title = 'stagger';
  }

  clickShow() {
    this.items = ['item1', 'item2', 'item3'];
  }

  clickRemove() {
    this.items = [];
  }
}
