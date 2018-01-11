import { Injectable } from '@angular/core';

@Injectable()
export class UseClassService {

  constructor() { }

  get message(): string {
    return 'good night!!';
  }
}
