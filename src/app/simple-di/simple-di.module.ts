import { NgModule } from '@angular/core';

import { SimpleDiComponent } from './simple-di.component';
import { SimpleDiService } from '../simple-di.service';

@NgModule({
  declarations: [
    SimpleDiComponent
  ],
  exports: [
    SimpleDiComponent
  ],
  providers: [
    SimpleDiService // 定義したサービスを追加
  ]
})
export class SimpleDiModule { }
