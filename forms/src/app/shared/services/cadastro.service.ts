import { Injectable } from '@angular/core';
import { Cargo } from './../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  cargos: Cargo[] = [
    { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr' },
    { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' },
    { nome: 'Dev', nivel: 'Senior', descricao: 'Dev Sr' }
  ]

  getCargos() {
    return this.cargos
  }
}
