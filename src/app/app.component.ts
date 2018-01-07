import { Component } from '@angular/core';

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
  `],
  host: {
    '[class.close]': 'isClose'
  }
})
export class AppSectionComponent {
  isClose: boolean = false;
  click() {
    this.isClose = !this.isClose;
  }
}
