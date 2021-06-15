import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Assassinato no expresso do oriente',
    rating: 4.76543,
    numeroPaginas: 200,
    preco: 34.66,
    dataLancamento: new Date(2017, 6, 3),
    url: 'https://www.amazon.com.br/Assassinato-no-Expresso-do-Oriente/dp/8595080631'
  };

  cursos: string[] = ['Java', 'Angular'];

  filtro!: string;

  onAddCurso(valor: any){
    this.cursos.push(valor);
    console.log(this.cursos)
  }

  obterCursos() {
    if(this.cursos.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.cursos;
    }

    return this.cursos.filter(
      (v: any) => v.toLocaleLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000)
  .pipe(
    map(valor => 'Valor assíncrono 2')
  )

  constructor() { }

  ngOnInit(): void {
  }

}
