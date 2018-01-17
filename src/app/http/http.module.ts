import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { HttpSampleComponent } from "./http-sample.component";
import { HttpFilterSampleComponent } from "./http-filter-sample.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    HttpSampleComponent,
    HttpFilterSampleComponent
  ],
  exports: [
    HttpSampleComponent,
    HttpFilterSampleComponent
  ]
})
export class HttpModule { }
