import { Component } from '@angular/core';

@Component({
  selector: 'app-content-child',
  template: `
    <app-parent>
      <app-child></app-child>
      <app-child></app-child>
    </app-parent>
  `
})
export class ContentChildComponent { }
