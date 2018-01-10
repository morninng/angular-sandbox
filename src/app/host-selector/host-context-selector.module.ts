import { Component } from '@angular/core';

@Component({
  selector: 'app-host-context-selector',
  template: '<h1>Hello Angular</h1>',
  styles: [
    ':host-context(.active) h1 { display: block; background: red; }'
  ]
})
export class HostContextSelectorComponent { }
