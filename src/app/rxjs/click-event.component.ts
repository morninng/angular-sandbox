import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event',
  template: `
    <button id="button1">クリックイベント（イベントドリブン）</button>
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
  }
}
