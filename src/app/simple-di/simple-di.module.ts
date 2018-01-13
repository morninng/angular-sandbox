import { NgModule } from '@angular/core';

import { SimpleDiService } from './simple-di.service';
import { UseClassService } from './use-class.service';
import { UseValueService, useValueService } from './use-value.service';
import { UseValueConstToken, USE_VALUE_CONST } from './use-value-const-token';
import { UseExistingService } from './use-existing.service';
import { DummyService } from './dummy.service';

import { SimpleDiComponent } from './simple-di.component';
import { UseValueDiComponent } from './use-value-di.component';
import { UseExistingDiComponent } from './use-existing-di.component';

@NgModule({
  declarations: [
    SimpleDiComponent,
    UseValueDiComponent,
    UseExistingDiComponent
  ],
  exports: [
    SimpleDiComponent,
    UseValueDiComponent,
    UseExistingDiComponent
  ],
  providers: [
    { provide: SimpleDiService, useClass: UseClassService },
    { provide: UseValueService, useValue: useValueService },
    { provide: UseValueConstToken, useValue: USE_VALUE_CONST },
    UseExistingService,
    { provide: DummyService, useExisting: UseExistingService }
  ]
})
export class SimpleDiModule { }
