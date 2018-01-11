import { NgModule } from '@angular/core';

import { SimpleDiComponent } from './simple-di.component';
import { SimpleDiService } from '../simple-di.service';

@NgModule({
  declarations: [
    SimpleDiComponent
  ],
  exports: [
    SimpleDiComponent
  ],
  providers: [
    { provide: SimpleDiService, useClass: SimpleDiService }
  ]
})
export class SimpleDiModule { }
