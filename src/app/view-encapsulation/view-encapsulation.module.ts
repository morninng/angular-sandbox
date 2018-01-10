import { NgModule } from '@angular/core';

import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated.component';
import { ViewEncapsulationNativeComponent } from './view-encapsulation-native.component';

@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNativeComponent
  ],
  exports: [
    ViewEncapsulationComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNativeComponent
  ]
})
export class ViewEncapsulationModule { }
