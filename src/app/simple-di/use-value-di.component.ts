import { Component } from '@angular/core';
import { UseValueService } from './use-value.service';
import { UseValueConst } from './use-value-const-type';

@Component({
  selector: 'app-use-value-di',
  template: `
    <p>{{useValueService.id}} - {{useValueService.name}}</p>
    <p>{{useValueConst.id}} - {{useValueConst.name}}</p>
  `,
  styles: []
})
export class UseValueDiComponent {
  constructor(
    public useValueService: UseValueService,
    public useValueConst: UseValueConst) {}
}
