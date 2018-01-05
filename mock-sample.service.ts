import { Injectable } from '@angular/core';

@Injectable()
export class MockSampleService {
  message: string;
  constructor() {
    this.message = 'This is mock service.';
  }
}
