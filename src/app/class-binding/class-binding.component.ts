import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <p class="underline xLerge"
    [class.bold]="isActive">class binding</p>
  `,
  styles: [`
    .bold { font-weight: bold;}
    .underline { text-decoration: underline; }
    .xLarge { font-size: x-large}
  `]
})
export class ClassBindingComponent {
  isActive = true;
}
