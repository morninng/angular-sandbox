import { NgModule } from '@angular/core';

import { SimpleDiComponent } from './simple-di.component';
import { SimpleDiService } from './simple-di.service';
import { UseClassService } from './use-class.service';
import { UseValueService, useValueService } from './use-value.service';
import { UseValueConstToken, USE_VALUE_CONST } from './use-value-const-token';
import { UseValueComponent } from './use-value.component';

@NgModule({
  declarations: [
    SimpleDiComponent,
    UseValueComponent
  ],
  exports: [
    SimpleDiComponent,
    UseValueComponent
  ],
  providers: [
    { provide: SimpleDiService, useClass: UseClassService },
    { provide: UseValueService, useValue: useValueService },
    { provide: UseValueConstToken, useValue: USE_VALUE_CONST }
  ]
})
export class SimpleDiModule { }
