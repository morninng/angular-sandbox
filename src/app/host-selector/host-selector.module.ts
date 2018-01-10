import { NgModule } from '@angular/core';

import { HostSelectorComponent } from './host-selector.component';
import { HostSelector2Component } from './host-selector2.component';
import { HostContextSelectorComponent } from './host-context-selector.module';

@NgModule({
  declarations: [
    HostSelectorComponent,
    HostSelector2Component,
    HostContextSelectorComponent
  ],
  exports: [
    HostSelectorComponent,
    HostSelector2Component,
    HostContextSelectorComponent
  ]
})
export class HostSelectorModule { }
