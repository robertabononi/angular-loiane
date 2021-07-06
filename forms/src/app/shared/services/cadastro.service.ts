import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', descricao: 'Dev Sr' }
    ]
  }
}
