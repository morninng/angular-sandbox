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
    let params  = new HttpParams();
    let headers = new HttpHeaders();
    params = params.append('foo', 'buz');
    headers = headers.append('X-Api-Token', 'token');
    const options = {
      params: params,
      headers: headers
    }
    this.http.get<string[]>('/assets/data/list.json', options)
      .subscribe(list => this.list = list);
  }
}
