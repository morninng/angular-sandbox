import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { ParentChildComponent } from './parent-child.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ChildComponent,
    ParentComponent,
    ParentChildComponent
  ],
  exports: [
    ParentChildComponent
  ]
})
export class ParentChildModule { }
