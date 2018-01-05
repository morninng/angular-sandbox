import { Component } from '@angular/core';
import { SampleService } from './sample.service';
import { MockSampleService } from './mock-sample.service';

@Component({
  selector: 'app-view-providers',
  template: `
    <app-view-providers-view-child></app-view-providers-view-child>
    <ng-content></ng-content>
  `,
  viewProviders: [
    { provide: SampleService, useClass: MockSampleService}
  ]
})
export class ViewProvidersComponent { }
