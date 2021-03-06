import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EstadoBr } from '../models/estado-br';
import { Cidade } from '../models/cidade';
import { Cargo } from '../models/cargo';
import { Tecnologia } from '../models/tecnologia';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  estadosUrl = 'assets/dados/estados-br.json';
  cidadesUrl = 'assets/dados/cidades.json'

  getEstadosBr() {
    return this.http.get<EstadoBr[]>(this.estadosUrl)
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>(this.cidadesUrl)
     .pipe(
       map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
     )
  }

  cargos: Cargo[] = [
    { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr' },
    { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' },
    { nome: 'Dev', nivel: 'Senior', descricao: 'Dev Sr' }
  ]

  getCargos() {
    return this.cargos
  }

  tecnologias: Tecnologia[] = [
    { nome: 'javascript', descricao: 'JavaScript' },
    { nome: 'java', descricao: 'Java' },
    { nome: 'php', descricao: 'PHP' },
    { nome: 'ruby', descricao: 'Ruby' }
  ]

  getTecnologias() {
    return this.tecnologias;
  }

  newsletter: any[] = [
    { nome: 'Sim', valor: 'sim' },
    { nome: 'Não', valor: 'nao'}
  ]

  getNewsletter() {
    return this.newsletter;
  }
}
