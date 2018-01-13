import { NgModule } from '@angular/core';

import { SimpleDiService } from './simple-di.service';
import { UseClassService } from './use-class.service';
import { UseValueService, useValueService } from './use-value.service';
import { UseValueConstToken, USE_VALUE_CONST } from './use-value-const-token';
import { UseExistingService } from './use-existing.service';
import { DummyService } from './dummy.service';

import { SimpleDiComponent } from './simple-di.component';
import { UseValueComponent } from './use-value.component';
import { UseExistingComponent } from './use-existing.component';

@NgModule({
  declarations: [
    SimpleDiComponent,
    UseValueComponent,
    UseExistingComponent
  ],
  exports: [
    SimpleDiComponent,
    UseValueComponent,
    UseExistingComponent
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
