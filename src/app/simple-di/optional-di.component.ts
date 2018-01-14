import { Component, OnInit } from '@angular/core';
import { OptionalInjectionService } from './optional-injection.service';

@Component({
  selector: 'app-optional-di',
  template: `
    <p>{{message}}</p>
  `,
  styles: []
})
export class OptionalDiComponent implements OnInit {
  message: string;

  constructor(private optionalInjectionService: OptionalInjectionService) { }

  ngOnInit() {
    this.message = this.optionalInjectionService.message;
  }
}
