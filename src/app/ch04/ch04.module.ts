import { NgModule } from '@angular/core';

import { SampleService } from './sample.service';
import { Ch04Component } from './ch04.component';
import { Ch04Directive } from './ch04.directive';

@NgModule({
  declarations: [
    Ch04Component,
    Ch04Directive
  ],
  imports: [],
  providers: [
    SampleService
  ],
  exports: [
    Ch04Component
  ]
})
export class Ch04Module { }
