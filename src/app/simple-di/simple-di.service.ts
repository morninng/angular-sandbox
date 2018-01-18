import { Injectable } from '@angular/core';

@Injectable()
export class SimpleDiService {

  constructor() { }

  get message(): string {
    return 'hello!!';
  }
}
