import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {
  message: string;
  constructor() {
    this.message = 'This is sample service.';
  }
}
