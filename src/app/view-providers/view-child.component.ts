import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-view-providers-view-child',
  template: `
    <h2>This is ViewChild</h2>
    <p>{{message}}</p>
  `
})
export class ViewChildComponent implements OnInit {
  message: string;

  constructor(private service: SampleService) { }

  ngOnInit() {
    this.message = this.service.message;
  }
}
