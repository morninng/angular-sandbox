import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { CounterWithSetterComponent } from './counter-with-setter.component';
import { CounterContainerComponent } from './counter-container.component';

@NgModule({
  declarations: [
    CounterComponent,
    CounterWithSetterComponent,
    CounterContainerComponent
  ],
  exports: [
    CounterContainerComponent
  ]
})
export class InputOutputModule { }
