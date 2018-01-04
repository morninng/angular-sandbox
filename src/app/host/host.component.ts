import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <app-toggle-color></app-toggle-color>
    <app-resize></app-resize>
  `,
  styles: [`
    .red { color: red; }
    .blue { color: blue; }
  `]
})
export class HostComponent { }
