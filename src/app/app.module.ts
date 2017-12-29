import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import { ClickComponent } from './click/click.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { SimpleComponent } from './simple/simple.component';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionsComponent,
    ClickComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    TwoWayComponent,
    SimpleComponent,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
