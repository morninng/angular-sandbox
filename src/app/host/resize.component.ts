import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resize',
  host: {
    '(window:resize)': 'onResize()'
  },
  template: `
    <p>width: {{width}}px</p>
    <p>height: {{height}}px</p>
  `
})
export class ResizeComponent implements OnInit {
  width: number;
  height: number;

  ngOnInit() {
    this.setWindowSize();
  }
  onResize() {
    this.setWindowSize();
  }

  private setWindowSize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}
