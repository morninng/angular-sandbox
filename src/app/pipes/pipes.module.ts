import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipesComponent } from "./pipes.component";
import { SampleNumberPipeComponent } from "./sample-number-pipe.component";
import { SampleCurrencyPipeComponent } from "./sample-currency-pipe.component";
import { SampleCasePipeComponent } from "./sample-case-pipe.component";
import { SampleDatePipeComponent } from "./sample-date-pipe.component";
import { SamplePercentPipeComponent } from "./sample-percent-pipe.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    PipesComponent,
    SampleNumberPipeComponent,
    SampleCurrencyPipeComponent,
    SampleCasePipeComponent,
    SampleDatePipeComponent,
    SamplePercentPipeComponent
  ],
  exports: [
    PipesComponent,
    SampleNumberPipeComponent,
    SampleCurrencyPipeComponent,
    SampleCasePipeComponent,
    SampleDatePipeComponent,
    SamplePercentPipeComponent
  ]
})
export class PipesModule { }
