import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'

import { AnimationsComponent } from './animations.component';
import { StateComponent } from './state.component';
import { State2Component } from './state2.component';
import { TransitionComponent } from './transition.component';
import { Transition2Component } from './transition2.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AnimationsComponent,
    StateComponent,
    State2Component,
    TransitionComponent,
    Transition2Component
  ],
  exports: [
    AnimationsComponent,
    StateComponent,
    State2Component,
    TransitionComponent,
    Transition2Component
  ]
})
export class AnimationsModule { }
