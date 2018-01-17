import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipesComponent } from "./pipes.component";
import { SampleNumberPipeComponent } from "./sample-number-pipe.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    PipesComponent,
    SampleNumberPipeComponent
  ],
  exports: [
    PipesComponent,
    SampleNumberPipeComponent
  ]
})
export class PipesModule { }
