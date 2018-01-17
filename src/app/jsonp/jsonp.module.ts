import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { JsonpSampleComponent } from './jsonp-sample.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [
    JsonpSampleComponent
  ],
  exports: [
    JsonpSampleComponent
  ]
})
export class JsonpModule { }
