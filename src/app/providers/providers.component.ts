import { Component } from '@angular/core';
import { SampleService } from './sample.service';
import { MockSampleService } from './mock-sample.service';

@Component({
  selector: 'app-providers',
  template: '<p>{{message}}</p>',
  providers: [
    { provide: SampleService, useClass: MockSampleService}
  ]
})
export class ProvidersComponent {
  message: string;
  constructor(service: SampleService) {
    this.message = service.message;
  }
}
