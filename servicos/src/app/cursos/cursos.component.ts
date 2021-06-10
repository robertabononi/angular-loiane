import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor() { }

  ngOnInit(): void {
  }

}
