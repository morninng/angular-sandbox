import { NgModule } from '@angular/core';

import { ClickEventComponent } from './click-event.component';
import { SubjectComponent } from "./subject.component";

@NgModule({
  declarations: [
    ClickEventComponent,
    SubjectComponent
  ],
  exports: [
    ClickEventComponent,
    SubjectComponent
  ]
})
export class RxjsModule { }
