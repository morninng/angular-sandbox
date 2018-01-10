import { Component, QueryList, ContentChild, ContentChildren, AfterContentInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: '<div><ng-content></ng-content></div>'
})
export class ParentComponent implements AfterContentInit {
  @ContentChild(ChildComponent) child: ChildComponent;

  @ContentChildren(ChildComponent) children: QueryList<ChildComponent>;

  ngAfterContentInit() {
    console.log('ContentChild: ', this.child);
    console.log('ContentChildren: ', this.children);
  }
}
