import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-emulated',
  template: `
    <h1>Hello Angular</h1>
    <p class="view-encapsulation-emulated">ViewEncapsulation.Emulated</p>
  `,
  styles: [
    'h1 { font-size: 20px; font-weight: bold; }',
    '.view-encapsulation-emulated { font-size: 16px; margin: 10px auto; font-style: italic; }'
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationEmulatedComponent { }
