import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      ID: {{person.id}}, Name: {{person.name}}
      <input type="button" value="選ぶ" (click)="click(person)" />
    </div>
  `
})
export class ChildComponent {
  @Input() person: any;
  @Output() selected = new EventEmitter();

  constructor() { }

  click(person): any {
    this.selected.emit(person);
  }
}
