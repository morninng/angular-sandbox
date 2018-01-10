import { NgModule } from '@angular/core';

import { HostSelectorComponent } from './host-selector.component';
import { HostSelector2Component } from './host-selector2.component';

@NgModule({
  declarations: [
    HostSelectorComponent,
    HostSelector2Component
  ],
  exports: [
    HostSelectorComponent,
    HostSelector2Component
  ]
})
export class HostSelectorModule { }
