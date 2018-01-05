import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-view-providers-content-child',
  template: `
    <h2>This is ContentChild</h2>
    <p>{{message}}</p>
  `
})
export class ContentChildComponent implements OnInit {
  message: string;

  constructor(private service: SampleService) { }

  ngOnInit() {
    this.message = this.service.message;
  }
}
