import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-secondary">
    </app-poc-base>
  `
})
export class PocUnsubComponent implements OnInit, OnDestroy {

  nome = "Componente com unsubscribe";
  valor!: string;

  sub!: Subscription;
  //Em casos de array sendo subscribed
  //sub: Subscription[] = []

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
    //this.sub.push(this.enviarValorService.getValor()
    this.sub = this.enviarValorService.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(novoValor => this.valor = novoValor)/*)*/
    ;
  }

  ngOnDestroy() {
    //this.sub.forEach(s => s.unsubscribe());
    this.sub.unsubscribe()
    console.log(`${this.nome} foi destruído`)
  }

}
