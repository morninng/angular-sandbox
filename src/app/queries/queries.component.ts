import { Component } from '@angular/core';

@Component({
  selector: 'app-queries',
  template: `
    <app-queries-child>
      <app-content-child></app-content-child>
      <app-content-child></app-content-child>
    </app-queries-child>
  `
})
export class QueriesComponent { }
