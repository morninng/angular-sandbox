import { NgModule } from '@angular/core';
import { ToggleColorComponent } from './toggle-color.component';
import { ResizeComponent } from './resize.component';
import { HostComponent } from './host.component';

@NgModule({
  declarations: [
    ToggleColorComponent,
    ResizeComponent,
    HostComponent
  ],
  exports: [
    HostComponent
  ]
})
export class HostModule { }
