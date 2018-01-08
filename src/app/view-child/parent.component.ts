import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <app-child></app-child>
      <app-child></app-child>
    </div>
  `
})
export class ParentComponent { }
