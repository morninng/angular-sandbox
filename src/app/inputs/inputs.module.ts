import { NgModule } from '@angular/core';
import { InputsCounterComponent } from './inputs-counter.component';
import { InputsComponent } from './inputs.component';
import { CounterColorDirective } from './counter-color.directive';

@NgModule({
  declarations: [
    CounterColorDirective,
    InputsCounterComponent,
    InputsComponent
  ],
  exports: [
    InputsComponent
  ]
})
export class InputsModule { }
