import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection-on-push-child',
  template: '<p>{{message.text}}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnPushChildComponent {
  @Input() message: Message;
}
