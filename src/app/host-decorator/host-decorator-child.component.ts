import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-decorator-child',
  template: '<div>Toggle color</div>'
})
export class HostDecoratorChildComponent {
  @HostBinding('class.red') isRed = false;
  @HostBinding('class.blue') isBlue = true;
  @HostBinding('attr.role') role = 'button';

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log(event.target);
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }
}
