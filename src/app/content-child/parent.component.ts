import { Component , ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: '<div><ng-content></ng-content></div>'
})
export class ParentComponent implements AfterContentInit {
  @ContentChild(ChildComponent) child: ChildComponent;

  ngAfterContentInit() {
    console.log('ContentChild: ', this.child);
  }
}
