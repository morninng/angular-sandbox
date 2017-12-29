import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import { ClickComponent } from './click/click.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionsComponent,
    ClickComponent,
    PropertyBindingComponent,
    AttributeBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
