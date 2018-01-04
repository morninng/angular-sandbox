import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCounterColor]',
  inputs:[
    'appCounterColor'
  ]
})
export class CounterColorDirective implements OnInit {
  appCounterColor: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style = `color: ${this.appCounterColor};`;
  }
}
