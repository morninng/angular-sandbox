import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-native',
  template: `
    <h1>Hello Angular</h1>
    <p class="view-encapsulation-native">ViewEncapsulation.Native</p>
  `,
  styles: [
    'h1 { font-size: 20px; font-weight: bold; }',
    '.view-encapsulation-native { font-size: 16px; margin: 10px auto; font-style: italic; }'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ViewEncapsulationNativeComponent { }
