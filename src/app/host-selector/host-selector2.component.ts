import { Component } from '@angular/core';

@Component({
  selector: 'app-host-selector2',
  template: '<h1>Hello Angular</h1>',
  styles: [
    ':host(.active) { display: block; background: red; }'
  ]
})
export class HostSelector2Component { }
