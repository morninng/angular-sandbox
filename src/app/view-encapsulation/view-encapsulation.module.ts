import { NgModule } from '@angular/core';

import { ViewEncapsulationComponent } from './view-encapsulation.component';

@NgModule({
  declarations: [
    ViewEncapsulationComponent
  ],
  exports: [
    ViewEncapsulationComponent
  ]
})
export class ViewEncapsulationModule { }
