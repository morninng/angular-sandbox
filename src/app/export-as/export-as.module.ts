import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { ExportAsComponent } from './export-as.component';

@NgModule({
  declarations: [
    CounterComponent,
    ExportAsComponent
  ],
  exports: [
    ExportAsComponent
  ]
})
export class ExportAsModule { }
