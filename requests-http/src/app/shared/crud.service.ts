import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  private readonly API_URL = `${environment.API}records`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      )
    ;
  }

  loadById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record)
      .pipe(
        take(1)
      )
    ;
  }

  private update(record: T | any) {
    return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

  save(record: T | any) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record)
  }
}
