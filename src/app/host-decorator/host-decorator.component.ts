import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-decorator',
  template: '<app-host-decorator-child></app-host-decorator-child>',
  styles: [
    '[role=button] { cursor: pointer; }',
    '.red { color: red; }',
    '.blue { color: blue; }'
  ]
})
export class HostDecoratorComponent { }
