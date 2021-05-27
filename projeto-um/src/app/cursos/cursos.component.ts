import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
    this.nomePortal = 'https://loiane.training';
    //var servico = new CursosService();

  }

  ngOnInit(): void {
  }

}
