import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-click-event',
  template: `
    <button id="button1">クリックイベント（イベントドリブン）</button>
    <button id="button2">クリックイベント（ストリーム）</button>
    <button id="button3">クリックイベント・1秒1回（イベントドリブン）</button>
  `
})
export class ClickEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    {
      const buttonElement = document.getElementById('button1');
      buttonElement.addEventListener('click', event => {
        console.log('clicked1');
      })
    }
    {
      const buttonElement = document.getElementById('button2');
      const buttonClick$ = Observable.fromEvent(buttonElement, 'click');
      buttonClick$.subscribe(ev => {
        console.log('clicked2');
      })
    }
    {
      var count = 0;
      const rate = 1000;
      var lastClick = Date.now() - rate;
      const buttonElement = document.getElementById('button3');
      buttonElement.addEventListener('click', event => {
        if (Date.now() - lastClick >= rate) {
          count += 1;
          console.log(`${count} clicked3!!`);
          lastClick = Date.now();
        }
      })
    }
  }
}
