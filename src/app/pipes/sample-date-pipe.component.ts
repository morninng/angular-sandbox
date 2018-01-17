import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-date-pipe',
  template: `
    <div>
      <p>{{ date | date:'medium' }}</p>
      <p>{{ date | date:'short' }}</p>
      <p>{{ date | date:'fullDate' }}</p>
      <p>{{ date | date:'longDate' }}</p>
      <p>{{ date | date:'mediumDate' }}</p>
      <p>{{ date | date:'shortDate' }}</p>
      <p>{{ date | date:'mediumTime' }}</p>
      <p>{{ date | date:'shortTime' }}</p>
    </div>
  `
})
export class SampleDatePipeComponent {
  public date: Date = new Date('2014-04-01');
}
