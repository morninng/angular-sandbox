import { Injectable } from '@angular/core';
import { SimpleDiService } from './simple-di.service';
import { DummyService } from './dummy.service';

@Injectable()
export class UseFactoryService {
  constructor(
    private simpleDiService: SimpleDiService,
    private dummyService: DummyService) { }

  get message(): string {
    return this.simpleDiService.message;
  }

  get count(): number {
    return this.dummyService.count;
  }
}
