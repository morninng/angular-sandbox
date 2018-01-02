import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html'
})
export class NgStyleComponent {
  // for production build
  check1;
  style1 = {
    'font-weight': 'bold',
    'text-decoration': 'line-through'
  }
}
