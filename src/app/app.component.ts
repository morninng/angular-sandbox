import { Component, HostBinding } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

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
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}

  @HostBinding('class.close') isClose = false;
  click() {
    this.isClose = !this.isClose;
  }
}
