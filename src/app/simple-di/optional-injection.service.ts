import { Injectable, Optional } from '@angular/core';
import { OptionalInjectionDepService } from './optional-injection-dep.service';

@Injectable()
export class OptionalInjectionService {
  message: string;
  constructor(@Optional() private optionalInjectionDepService:
                                  OptionalInjectionDepService) {
    if (this.optionalInjectionDepService) {
      this.message = this.optionalInjectionDepService.message;
    } else {
      this.message = 'OptionalInjectionDepService is not exist.'
    }
  }
}
