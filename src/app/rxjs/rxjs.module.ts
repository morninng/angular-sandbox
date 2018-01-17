import { NgModule } from '@angular/core';

import { ClickEventComponent } from './click-event.component';
import { SubjectComponent } from './subject.component';
import { PromiseComponent } from './promise.component';

@NgModule({
  declarations: [
    ClickEventComponent,
    SubjectComponent,
    PromiseComponent
  ],
  exports: [
    ClickEventComponent,
    SubjectComponent,
    PromiseComponent
  ]
})
export class RxjsModule { }
