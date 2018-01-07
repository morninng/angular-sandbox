import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'

import { AnimationsComponent } from './animations.component';
import { TransitionComponent } from './transition.component';
import { StateComponent } from './state.component';
import { State2Component } from './state2.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AnimationsComponent,
    TransitionComponent,
    StateComponent,
    State2Component
  ],
  exports: [
    AnimationsComponent,
    TransitionComponent,
    StateComponent,
    State2Component
  ]
})
export class AnimationsModule { }
