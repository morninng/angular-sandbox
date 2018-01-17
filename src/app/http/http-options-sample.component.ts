import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-options-sample',
  template: `
    <div>{{ list | json }}</div>
  `
})
export class HttpOptionsSampleComponent implements OnInit {
  list: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const params  = new HttpParams();
    const headers = new HttpHeaders();
    params.append('foo', 'buz');
    headers.append('X-Api-Token', 'token');
    const options = {
      paramas: params,
      headers: headers
    }
    this.http.get<string[]>('/assets/data/list.json', options)
      .subscribe(list => this.list = list);
  }
}
