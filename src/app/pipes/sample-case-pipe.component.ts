import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-case-pipe',
  template: `
    <div>
      <p>{{ str | uppercase }}</p>
      <p>{{ str | lowercase }}</p>
    </div>
  `
})
export class SampleCasePipeComponent {
  public str = '';

  constructor() {
    this.str = 'aNgUlAr';
  }
}
