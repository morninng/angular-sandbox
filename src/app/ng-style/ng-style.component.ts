import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html'
})
export class NgStyleComponent {
  style1 = {
    'font-weight': 'bold',
    'text-decoration': 'line-through'
  }
}
