import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { HttpSampleComponent } from "./http-sample.component";
import { HttpFilterSampleComponent } from "./http-filter-sample.component";
import { HttpOptionsSampleComponent } from "./http-options-sample.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    HttpSampleComponent,
    HttpFilterSampleComponent,
    HttpOptionsSampleComponent
  ],
  exports: [
    HttpSampleComponent,
    HttpFilterSampleComponent,
    HttpOptionsSampleComponent
  ]
})
export class HttpModule { }
