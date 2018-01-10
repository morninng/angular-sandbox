import { NgModule } from '@angular/core';

import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { ContentChildComponent } from './content-child.component';

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    ContentChildComponent
  ],
  exports: [
    ContentChildComponent
  ]
})
export class ContentChildModule { }
