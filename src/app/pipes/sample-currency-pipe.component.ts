import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-currency-pipe',
  template: `
    <div>
      <p>{{ euro | currency:'EUR':true:'4.4-4' }}</p>
      <p>{{ euro | currency:'JPY':true }}</p>
    </div>
  `
})
export class SampleCurrencyPipeComponent {
  public euro = 0;
  constructor() {
    this.euro = 100000.12;
  }
}
