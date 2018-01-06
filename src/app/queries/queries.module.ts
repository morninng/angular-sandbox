import { NgModule } from '@angular/core';

import { ViewChildComponent } from './view-child.component';
import { ContentChildComponent } from './content-child.component';
import { QueriesChildComponent } from './queries-child.component';
import { QueriesComponent } from './queries.component';

@NgModule({
  declarations: [
    ViewChildComponent,
    ContentChildComponent,
    QueriesChildComponent,
    QueriesComponent
  ],
  exports: [
    QueriesComponent
  ]
})
export class QueriesModule { }
