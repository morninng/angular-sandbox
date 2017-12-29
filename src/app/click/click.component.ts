import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  template:
  `<button (click)="clickButton($event)">ボタン</button>`
})
export class ClickComponent {
  clickButton($event) {
    console.log($event);
  }
}
