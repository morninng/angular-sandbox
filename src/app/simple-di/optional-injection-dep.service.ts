import { Injectable } from '@angular/core';

@Injectable()
export class OptionalInjectionDepService {
  message: string;
  constructor() {
    this.message = 'OptionalInjectionDepService is exist.';
  }
}
