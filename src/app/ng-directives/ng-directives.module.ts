import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgClassComponent } from './ng-class.component';
import { NgStyleComponent } from './ng-style.component';
import { NgForComponent } from './ng-for.component';
import { NgIfComponent } from './ng-if.component';
import { NgSwitchComponent } from './ng-switch.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    NgClassComponent,
    NgStyleComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent
  ],
  exports: [
    NgClassComponent,
    NgStyleComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent
  ]
})
export class NgDirectivesModule { }
