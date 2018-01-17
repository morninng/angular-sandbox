import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-sample-number-pipe',
  template: `
    <div>
      <p>e (no formatting): {{ e }}</p>
      <p>e (3.1-5): {{ e | number:'3.1-5' }}</p>
      <p>pi (no formatting): {{ pi }}</p>
      <p>pi (4.3-5): {{ pi | number:'4.3-5' }}</p>
    </div>
  `
})
export class SampleNumberPipeComponent {
  pi: number = 3.141;
  e: number = 2.718281828459045;
}
