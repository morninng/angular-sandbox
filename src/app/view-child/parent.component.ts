import { Component, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <app-child></app-child>
      <app-child></app-child>
    </div>
  `
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child: ChildComponent;

  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  ngAfterViewInit() {
    console.log('ViewChild:', this.child);
    console.log('ViewChildren', this.children);
  }
}
