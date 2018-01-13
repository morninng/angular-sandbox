import { Component, OnInit } from '@angular/core';
import { SimpleDiService } from './simple-di.service';

@Component({
  selector: 'app-simple-di',
  template: `
    <p>{{message}}</p>
  `
})
export class SimpleDiComponent implements OnInit {
  message: string;

  constructor(private simpleDiService: SimpleDiService) { }

  ngOnInit() {
    this.message = this.simpleDiService.message;
  }
}
