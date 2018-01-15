import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MaterialComponent } from './material.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatDatepickerModule,
  ],
  declarations: [
    MaterialComponent
  ]
})
export class MaterialModule { }
