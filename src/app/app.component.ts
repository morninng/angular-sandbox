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
  template: `
    <span (click)="click()"
      angulartics2On="click"
      angularticsAction="SectionClick"
      [angularticsCategory]="status">
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
  // TODO should move to AppComponent
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    console.log('AppSectionComponent');
  }
  click() {
    this.isClose = !this.isClose;
  }
  get status(): string {
    return this.isClose ? 'close' : 'open';
  }
}
