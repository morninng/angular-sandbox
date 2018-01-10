import { Component } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  template: `
    <h1>Hello Angular</h1>
    <p class="view-encapsulation">without ViewEncapsulation</p>
  `,
  styles: [
    'h1 { font-size: 20px; font-weight: bold; }',
    '.view-encapsulation { font-size: 16px; margin: 10px auto; font-style: italic; }'
  ]
})
export class ViewEncapsulationComponent { }
