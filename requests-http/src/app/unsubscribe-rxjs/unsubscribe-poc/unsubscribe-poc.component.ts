import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.css']
})
export class UnsubscribePocComponent implements OnInit {

  mostrarComponentes: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  emitirValor(valor: string) {

  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }

}
