import { Component } from '@angular/core';
import { UseValueService } from './use-value.service';
import { UseValueConstToken } from './use-value-const-token';

@Component({
  selector: 'app-use-value-di',
  template: `
    <p>{{useValueService.id}} - {{useValueService.name}}</p>
    <p>{{useValueConstToken.id}} - {{useValueConstToken.name}}</p>
  `,
  styles: []
})
export class UseValueDiComponent {
  constructor(
    public useValueService: UseValueService,
    public useValueConstToken: UseValueConstToken) {}
}
