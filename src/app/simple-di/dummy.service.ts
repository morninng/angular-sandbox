import { Injectable } from '@angular/core';

@Injectable()
export class DummyService {
  private _count = 0;

  constructor() { }

  get count(): number {
    return this._count += 1;
  }
}
