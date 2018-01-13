import { Component } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styles: []
})
export class RouterComponent {
  list = [
    { id: '1', name: 'A' },
    { id: '2', name: 'B' }
  ]
}
