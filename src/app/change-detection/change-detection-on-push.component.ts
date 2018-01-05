import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-on-push',
  template: `
    <h2>ChangeDetectionStrategy.OnPush</h2>
    <app-change-detection-on-push-child
      [message]="message"></app-change-detection-on-push-child>
    <button (click)="changeProperty()">change property</button>
    <button (click)="changeObject()">change object</button>
  `
})
export class ChangeDetectionOnPushComponent {
  message: Message;

  constructor() {
    this.message = { text: 'original' };
  }

  changeProperty() {
    this.message.text = 'change property';
  }

  changeObject() {
    this.message = { text: 'change object' };
  }
}
