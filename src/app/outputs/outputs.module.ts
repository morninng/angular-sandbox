import { NgModule } from '@angular/core';
import { OutputsCounterComponent } from './outputs-counter.component';
import { OutputsComponent } from './outputs.component';

@NgModule({
  declarations: [
    OutputsCounterComponent,
    OutputsComponent
  ],
  exports: [
    OutputsComponent
  ]
})
export class OutputsModule { }
