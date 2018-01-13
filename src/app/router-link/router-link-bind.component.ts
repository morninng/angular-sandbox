import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router-link-bind',
  templateUrl: './router-link-bind.component.html',
  styles: []
})
export class RouterLinkBindComponent {
  list = [
    { id: '1', name: 'A' },
    { id: '2', name: 'B' }
  ]
}
