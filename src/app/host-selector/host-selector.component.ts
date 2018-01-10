import { Component } from '@angular/core';

@Component({
  selector: 'app-host-selector',
  template: '<h1>Hello Angular</h1>',
  styles: [
    ':host { display: block; background: red; }'
  ]
})
export class HostSelectorComponent { }
