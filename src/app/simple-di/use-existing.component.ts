import { Component, OnInit } from '@angular/core';
import { UseExistingService } from './use-existing.service';
import { DummyService } from './dummy.service';

@Component({
  selector: 'app-use-existing',
  template: `
    <p>{{existingCount}}</p>
    <p>{{dummyCount}}</p>
  `
})
export class UseExistingComponent implements OnInit {
  existingCount: number;
  dummyCount: number;

  constructor(
    private existingService: UseExistingService,
    private dummyService: DummyService
  ) { }

  ngOnInit() {
    this.existingCount = this.existingService.count;
    this.dummyCount = this.dummyService.count;
  }
}
