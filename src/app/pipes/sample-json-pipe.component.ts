import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-json-pipe',
  template: `
    <div>
      {{ data | json }}
    </div>
  `
})
export class SampleJsonPipeComponent {
  data: any = {
    'Kanto' : [
      { 'name': '東京都', 'population': 12369185 },
      { 'name': '神奈川県', 'population': 8687422 },
      { 'name': '埼玉県', 'population': 7037849 },
      { 'name': '千葉県', 'population': 6028315 },
      { 'name': '茨城県', 'population': 2992152 },
      { 'name': '群馬県', 'population': 2033535 },
      { 'name': '栃木県', 'population': 2011691 },
      { 'name': '山梨県', 'population': 887959 }
    ]
  };
}
