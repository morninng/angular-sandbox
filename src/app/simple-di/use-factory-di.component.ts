import { Component, OnInit } from '@angular/core';
import { UseFactoryService } from './use-factory.service';

@Component({
  selector: 'app-use-factory-di',
  template: `
    <p>{{message}}</p>
    <p>{{count}}</p>
  `
})
export class UseFactoryDiComponent implements OnInit {
  message: string;
  count: number;

  constructor(private useFactoryService: UseFactoryService) { }

  ngOnInit() {
    this.message = this.useFactoryService.message;
    this.count = this.useFactoryService.count;
  }
}
