import { Component } from '@angular/core';
import { UseValueService } from './use-value.service';
import { UseValueConstToken } from './use-value-const-token';

@Component({
  selector: 'app-use-value',
  template: `
    <p>{{useValueService.id}} - {{useValueService.name}}</p>
    <p>{{useValueConstToken.id}} - {{useValueConstToken.name}}</p>
  `,
  styles: []
})
export class UseValueComponent {
  constructor(
    private useValueService: UseValueService,
    private useValueConstToken: UseValueConstToken
  ) {}
}
