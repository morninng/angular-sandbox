import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-none',
  template: `
    <h1>Hello Angular</h1>
    <p>ViewEncapsulation.None</p>
  `,
  styles: [
    'h1 { font-size: 20px; font-weight: bold; }',
    'p { font-size: 16px; margin: 10px auto; }'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationNoneComponent { }
