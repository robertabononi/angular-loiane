import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
