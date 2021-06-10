import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap']

  constructor(){
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string){
    this.cursos.push(curso);
  }

}
