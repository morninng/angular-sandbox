import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: '<p>[% message %]</p>',
  interpolation: ['[%', '%]']
})
export class InterpolationComponent {
  message: string;
  constructor() {
    this.message = 'Change delimiters.'
  }
}
