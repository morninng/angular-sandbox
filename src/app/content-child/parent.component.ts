import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<div><ng-content></ng-content></div>'
})
export class ParentComponent { }
