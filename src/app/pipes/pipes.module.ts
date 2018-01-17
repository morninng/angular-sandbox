import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipesComponent } from "./pipes.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    PipesComponent
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule { }
