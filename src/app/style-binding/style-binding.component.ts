import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <p [style.font-size.%]="isActive? 50: 300">style binding</p>
  `
})
export class StyleBindingComponent {
  isActive = true;
}
