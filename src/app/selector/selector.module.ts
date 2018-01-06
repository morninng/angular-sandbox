import { NgModule } from '@angular/core';
import { SelectorMyAppComponent } from './selector-my-app.component';
import { SelectorComponent } from './selector.component';

@NgModule({
  declarations: [
    SelectorMyAppComponent,
    SelectorComponent
  ],
  exports: [
    SelectorComponent
  ]
})
export class SelectorModule { }
