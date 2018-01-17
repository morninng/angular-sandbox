import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/filter';

export interface IPerson {
  name: string;
  age: number;
}

@Component({
  selector: 'app-http-filter-sample',
  template: `
    <div>{{ list | json }}</div>
  `
})
export class HttpFilterSampleComponent implements OnInit {
  list: IPerson[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IPerson[]>('/assets/data/people.json')
      .flatMap((people: IPerson[]) => people)
      .filter((person: IPerson) => person.age >= 18 )
      .subscribe((person: IPerson) => this.list.push(person))
  }
}
