import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { ViewChildComponent } from './view-child.component';

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    ViewChildComponent
  ],
  exports: [
    ViewChildComponent
  ]
})
export class ViewChildModule { }
