import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.css']
})
export class ReactiveSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$!: Observable<any>;
  total = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.queryField.value)

    this.results$ = this.http.get(`${this.SEARCH_URL}?fields=name,description,version,homepage&search=angular`)
      .pipe(
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)
      )
  }

}
