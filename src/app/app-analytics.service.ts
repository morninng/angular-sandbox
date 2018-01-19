import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Injectable()
export class AppAnalyticsService {
  constructor(private angulartics2: Angulartics2) { }

  send(action = 'DefaultAction',
       category = 'DefaultCategory',
       label = 'DefaultLabel',
       value = 'DefaultValue') {
    this.angulartics2.eventTrack.next({
      action: action,
      properties: { 
        category: category, 
        label: label,
        value: value
      }
    });
  }
}
