import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { CounterContainerComponent } from './counter-container.component';

@NgModule({
  declarations: [
    CounterComponent,
    CounterContainerComponent
  ],
  exports: [
    CounterContainerComponent
  ]
})
export class InputOutputModule { }
