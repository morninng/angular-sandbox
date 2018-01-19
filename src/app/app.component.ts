import { Component, HostBinding } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AppAnalyticsService } from './app-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }
}

@Component({
  selector: '.section',
  template: `
    <span (click)="click()">
      <ng-content></ng-content>
    </span>`,
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
  constructor(private analytics :AppAnalyticsService) { }
  click() {
    this.isClose = !this.isClose;
    this.analytics.send('SectionClick', this.status);
  }
  get status(): string {
    return this.isClose ? 'close' : 'open';
  }
}
