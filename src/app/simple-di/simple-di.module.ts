import { NgModule } from '@angular/core';

import { SimpleDiService } from './simple-di.service';
import { UseClassService } from './use-class.service';
import { UseValueService, useValueService } from './use-value.service';
import { UseValueConst } from './use-value-const-type';
import { USE_VALUE_CONST } from './use-value-const-token';
import { UseExistingService } from './use-existing.service';
import { DummyService } from './dummy.service';
import { UseFactoryService } from './use-factory.service';
import { useFactoryFn } from './use-factory.function';
import { OptionalInjectionService } from './optional-injection.service';
import { OptionalInjectionDepService } from './optional-injection-dep.service';

import { SimpleDiComponent } from './simple-di.component';
import { UseValueDiComponent } from './use-value-di.component';
import { UseExistingDiComponent } from './use-existing-di.component';
import { UseFactoryDiComponent } from './use-factory-di.component';
import { OptionalDiComponent } from './optional-di.component';

@NgModule({
  declarations: [
    SimpleDiComponent,
    UseValueDiComponent,
    UseExistingDiComponent,
    UseFactoryDiComponent,
    OptionalDiComponent
  ],
  exports: [
    SimpleDiComponent,
    UseValueDiComponent,
    UseExistingDiComponent,
    UseFactoryDiComponent,
    OptionalDiComponent
  ],
  providers: [
    { provide: SimpleDiService, useClass: UseClassService },
    { provide: UseValueService, useValue: useValueService },
    { provide: UseValueConst, useValue: USE_VALUE_CONST },
    UseExistingService,
    { provide: DummyService, useExisting: UseExistingService },
    { provide: UseFactoryService, useFactory: useFactoryFn,
      deps: [SimpleDiService, DummyService]
    },
    OptionalInjectionDepService,
    OptionalInjectionService
  ]
})
export class SimpleDiModule { }
