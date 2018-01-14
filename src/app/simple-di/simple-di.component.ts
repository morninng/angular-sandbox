import { Component, Inject, OnInit } from '@angular/core';
import { SimpleDiService } from './simple-di.service';

@Component({
  selector: 'app-simple-di',
  template: `
    <p>{{message}}</p>
  `
})
export class SimpleDiComponent implements OnInit {
  message: string;

  constructor(@Inject(SimpleDiService) private simpleDiService: SimpleDiService) { }

  ngOnInit() {
    this.message = this.simpleDiService.message;
  }
}
