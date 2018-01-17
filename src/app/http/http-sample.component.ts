import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-http-sample',
  template: `
    <div>{{ list | json }}</div>
  `,
  styles: []
})
export class HttpSampleComponent implements OnInit {
  list: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<string[]>('/assets/data/list.json')
      .subscribe(list => this.list = list);
  }
}
