import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-color',
  host: {
    '(click)': 'onClick($event)',
    '[class.red]': 'isRed',
    '[class.blue]': 'isBlue',
    'role': 'button'
  },
  template: '<div>Toggle color</div>'
})
export class ToggleColorComponent {
  isRed = false;
  isBlue = true;

  onClick(ev) {
    ev.preventDefault();
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }
}
