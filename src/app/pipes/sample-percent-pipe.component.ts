import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-percent-pipe',
  template: `
    <div>
      <p>A: {{ a | percent }}</p>
      <p>B: {{ b | percent:'1.3-9' }}</p>
    </div>
  `
})
export class SamplePercentPipeComponent {
  a = 0.2577711;
  b = 100.34959999;
}
