import { Component } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-view-providers-container',
  template: `
    <app-view-providers>
      <app-view-providers-content-child></app-view-providers-content-child>
    </app-view-providers>
  `,
  viewProviders: [
    SampleService
  ]
})
export class ViewProvidersContainerComponent { }
