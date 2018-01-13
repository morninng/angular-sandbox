import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RouterLinkComponent } from './router-link.component';
import { RouterLinkBindComponent } from './router-link-bind.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    RouterLinkComponent,
    RouterLinkBindComponent
  ],
  exports: [
    RouterLinkComponent,
    RouterLinkBindComponent
  ]
})
export class RouterLinkModule { }
