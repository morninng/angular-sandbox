import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <button [disabled]="isDisabled">ボタン</button>
    <img [src]="imagePath" />
  `
})
export class PropertyBindingComponent {
  isDisabled = true;
  imagePath = 'https://angular.io/assets/images/logos/angular/angular.svg';
}
