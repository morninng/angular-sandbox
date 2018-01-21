import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-options-sample',
  template: `
    <div>{{ list1 | json }}</div>
    <div>{{ list2 | json }}</div>
  `
})
export class HttpOptionsSampleComponent implements OnInit {
  list1: string[];
  list2: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    {
      let params  = new HttpParams();
      let headers = new HttpHeaders();
      params = params.append('foo', 'buz1');
      headers = headers.append('X-Api-Token', 'token1');
      const options = {
        params: params,
        headers: headers
      }
      this.http.get<string[]>('/assets/data/list.json', options)
        .subscribe(list => this.list1 = list);
    }
    {
      const options = {
        params: {'foo': 'buz2'},
        headers: {'X-Api-Token': 'token2'}
      }
      this.http.get<string[]>('/assets/data/list.json', options)
        .subscribe(list => this.list2 = list);
    }
  }
}
