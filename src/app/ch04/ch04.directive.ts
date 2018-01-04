import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[ch04Attr]'
})
export class Ch04Directive implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('Hello directive');
  }
}
