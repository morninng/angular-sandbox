import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jsonp-sample',
  templateUrl: './jsonp-sample.component.html'
})
export class JsonpSampleComponent implements OnInit {
  data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.jsonp('assets/data.jsonp', 'callback')
      .subscribe(data => this.data = data);
  }
}
