import { NgModule } from '@angular/core';

import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated.component';

@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    ViewEncapsulationEmulatedComponent
  ],
  exports: [
    ViewEncapsulationComponent,
    ViewEncapsulationEmulatedComponent
  ]
})
export class ViewEncapsulationModule { }
