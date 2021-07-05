import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EstadoBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  estadosUrl = 'assets/dados/estados-br.json';

  getEstadosBr() {
    return this.http.get<EstadoBr>(this.estadosUrl)
  }
}
