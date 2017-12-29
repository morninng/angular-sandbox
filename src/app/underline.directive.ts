import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-underline]',
})
export class UnderlineDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.textDecoration = 'underline';
  }
}
