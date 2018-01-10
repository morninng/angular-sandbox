import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animations',
  template: `
    <p [@myTrigger]="animate">Animate !!</p>
    <button (click)="click()">ON/OFF</button>
  `,
  animations: [
    trigger('myTrigger', [
      state('on', style({opacity: 1})),
      state('off', style({opacity: 0})),
      transition('on => off', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AnimationsComponent {
  animate = 'on';

  click() {
    if (this.animate === 'on') {
      this.animate = 'off';
    } else {
      this.animate = 'on';
    }
  }
}
