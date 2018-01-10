import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-none',
  template: `
    <h1>Hello Angular</h1>
    <p class="view-encapsulation-none">ViewEncapsulation.None</p>
  `,
  styles: [
    'h1 { font-size: 20px; font-weight: bold; }',
    '.view-encapsulation-none { font-size: 16px; margin: 10px auto; font-style: italic; }'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationNoneComponent { }
