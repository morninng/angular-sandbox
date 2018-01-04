import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-color',
  host: {
    '(click)': 'onClick($event)',
    '[class.red]': 'isRed',
    '[class.blue]': 'isBlue'
  },
  template: '<div>Toggle color</div>'
})
export class ToggleColorComponent {
  isRed = false;
  isBlue = true;

  onClick(ev) {
    console.log(ev.target);
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }
}
