import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-native',
  template: `
    <h1>Hello Angular</h1>
    <p>ViewEncapsulation.Native</p>
  `,
  styles: [
    'h1 { font-size: 20px; font-weight: bold; }',
    'p { font-size: 16px; margin: 10px auto; }'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ViewEncapsulationNativeComponent { }
