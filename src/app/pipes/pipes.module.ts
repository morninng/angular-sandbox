import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipesComponent } from "./pipes.component";
import { SampleNumberPipeComponent } from "./sample-number-pipe.component";
import { SampleCurrencyPipeComponent } from "./sample-currency-pipe.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    PipesComponent,
    SampleNumberPipeComponent,
    SampleCurrencyPipeComponent
  ],
  exports: [
    PipesComponent,
    SampleNumberPipeComponent,
    SampleCurrencyPipeComponent
  ]
})
export class PipesModule { }
