import { Component, OnInit } from '@angular/core';
import { UseExistingService } from './use-existing.service';
import { DummyService } from './dummy.service';

@Component({
  selector: 'app-use-existing-di',
  template: `
    <p>{{count}}</p>
  `
})
export class UseExistingComponent implements OnInit {
  count = 0;

  constructor(
    private useExistingService: UseExistingService,
    private dummyService: DummyService) { }

  ngOnInit() {
    this.count += this.useExistingService.count;
    this.count += this.dummyService.count;
  }
}
