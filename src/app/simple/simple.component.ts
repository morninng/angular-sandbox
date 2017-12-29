import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: '<div>{{text}}</div>'
})
export class SimpleComponent {
  text = 'Simple Component !!';
}
