import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector: '.section',
  template: '<span (click)="click()"><ng-content></ng-content></span>',
  styles: [`
    span:hover {
      text-decoration: underline;
      color: blue;
      cursor: pointer;
    }
  `]
})
export class AppSectionComponent {
  @HostBinding('class.close') isClose = false;
  click() {
    this.isClose = !this.isClose;
  }
}
