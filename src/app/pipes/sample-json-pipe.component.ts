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
      { 'name': '東京都', 'Populdation': 12369185 },
      { 'name': '神奈川県', 'Populdation': 8687422 },
      { 'name': '埼玉県', 'Populdation': 7037849 },
      { 'name': '千葉県', 'Populdation': 6028315 },
      { 'name': '茨城県', 'Populdation': 2992152 },
      { 'name': '群馬県', 'Populdation': 2033535 },
      { 'name': '栃木県', 'Populdation': 2011691 },
      { 'name': '山梨県', 'Populdation': 887959 },
    ]
  }
}
