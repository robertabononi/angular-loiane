import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  estadosUrl = 'assets/dados/estados-br.json';

  getEstadosBr() {
    return this.http.get(this.estadosUrl)
  }
}
