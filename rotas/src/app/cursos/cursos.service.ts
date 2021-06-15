import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return[
      {idCurso: 1, nome: 'Angular'},
      {idCurso: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for (let curso of cursos){
      if (curso.idCurso == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
