import { NgModule } from '@angular/core';
import { ViewChildComponent } from './view-child.component';
import { ContentChildComponent } from './content-child.component';
import { ViewProvidersComponent } from './view-providers.component';
import { ViewProvidersContainerComponent } from './view-providers-container.component';

@NgModule({
  declarations: [
    ViewChildComponent,
    ContentChildComponent,
    ViewProvidersComponent,
    ViewProvidersContainerComponent
  ],
  exports: [
    ViewProvidersContainerComponent
  ]
})
export class ViewProvidersModule { }
