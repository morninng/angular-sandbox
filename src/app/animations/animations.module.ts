import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { AnimationsComponent } from './animations.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AnimationsComponent,
  ],
  exports: [
    AnimationsComponent
  ]
})
export class AnimationsModule { }
