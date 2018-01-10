import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  template: `
    <h1>Hello Angular</h1>
    <p>without ViewEncapsulation</p>
  `,
  styles: [
    'h1 { font-size: 20px; font-weight: bold; }',
    'p { font-size: 16px; margin: 10px auto; }'
  ]
})
export class ViewEncapsulationComponent { }
