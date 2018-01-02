import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <p>UpperCasePipe {{lowercaseData}} -> {{lowercaseData | uppercase}}</p>
    <p>DatePipe {{dateData}} -> {{dateData | date: 'yyyy年MM月dd日'}}
  `
})
export class PipesComponent {
  lowercaseData = 'angular';
  dateData = Date.now();
}
