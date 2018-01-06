import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  template: `
    <h1>Hello Angular</h1>
    <p>Lorem ipsum dolor sit amet...</p>
  `,
  styles: [`
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
      margin: 10px auto;
    }
  `]
})
export class StylesComponent { }
