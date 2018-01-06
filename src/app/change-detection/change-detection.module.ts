import { NgModule } from '@angular/core';
import { ChangeDetectionOnPushChildComponent } from './change-detection-on-push-child.component';
import { ChangeDetectionOnPushComponent } from './change-detection-on-push.component';

@NgModule({
  declarations: [
    ChangeDetectionOnPushChildComponent,
    ChangeDetectionOnPushComponent
  ],
  exports: [
    ChangeDetectionOnPushComponent
  ]
})
export class ChangeDetectionModule { }
