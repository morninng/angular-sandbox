import { NgModule } from '@angular/core';
import { HostDecoratorChildComponent } from './host-decorator-child.component';
import { HostDecoratorComponent } from './host-decorator.component';

@NgModule({
  declarations: [
    HostDecoratorChildComponent,
    HostDecoratorComponent
  ],
  exports: [
    HostDecoratorComponent
  ]
})
export class HostDecoratorModule { }
