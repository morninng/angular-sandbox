import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ViewChildComponent } from './view-child.component';
import { ContentChildComponent } from './content-child.component';

@Component({
  selector: 'app-queries-child',
  template: `
    <app-view-child></app-view-child>
    <app-view-child></app-view-child>
    <ng-content></ng-content>
  `,
  queries: {
    viewChild: new ViewChild(ViewChildComponent),
    viewChildren: new ViewChildren(ViewChildComponent),
    contentChild: new ContentChild(ContentChildComponent),
    contentChildren: new ContentChildren(ContentChildComponent)
  }
})
export class QueriesChildComponent implements AfterContentInit, AfterViewInit {
  viewChild: ViewChildComponent;
  viewChildren: QueryList<ViewChildComponent>;
  contentChild: ContentChildComponent;
  contentChildren: QueryList<ContentChildComponent>;

  ngAfterViewInit() {
    console.log('Query content child:', this.contentChild);
    console.log('Query content children: ', this.contentChildren);
  }

  ngAfterContentInit() {
    console.log('Query view child: ', this.viewChild);
    console.log('Query view childredn: ', this.contentChildren);
  }
}
