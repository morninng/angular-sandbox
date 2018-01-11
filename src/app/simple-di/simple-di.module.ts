import { NgModule } from '@angular/core';

import { SimpleDiComponent } from './simple-di.component';
import { SimpleDiService } from './simple-di.service';
import { UseClassService } from './use-class.service';

@NgModule({
  declarations: [
    SimpleDiComponent
  ],
  exports: [
    SimpleDiComponent
  ],
  providers: [
    { provide: SimpleDiService, useClass: UseClassService }
  ]
})
export class SimpleDiModule { }
