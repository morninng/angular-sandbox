import { NgModule } from '@angular/core';

import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated.component';
import { ViewEncapsulationNativeComponent } from './view-encapsulation-native.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none.component';

@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNativeComponent,
    ViewEncapsulationNoneComponent
  ],
  exports: [
    ViewEncapsulationComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNativeComponent,
    ViewEncapsulationNoneComponent
  ]
})
export class ViewEncapsulationModule { }
