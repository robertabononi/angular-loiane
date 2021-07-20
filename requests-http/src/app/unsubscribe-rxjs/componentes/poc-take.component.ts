import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-info">
    </app-poc-base>
  `
})
export class PocTakeComponent implements OnInit {

  nome = "Componente com take";
  valor!: string;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
  }

}