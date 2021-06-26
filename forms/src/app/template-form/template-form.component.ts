import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario:any = {
    nome: '',
    email: ''
  }

  onSubmit(form: any){
    console.log(form) //acesso aos controles

    //console.log(this.usuario)
    //acima, duas formar diferentes de retonar a mesma coisa usando o two-way data binding!
    //caso use apenas property binding, o form será atualizado, mas o objeto (usuario) não.
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  invalidTouchedField(campo: any) {
    return !campo.valid && campo.touched
  }

  consultaCEP(cep: any) {

    //Nova variável "cep" somente com dígitos. Substitui qualquer dígito não numérico
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP, que em ele só pode ter 8 dígitos de 0 a 9.
      const validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .pipe(map(dados => dados))
        .subscribe(dados => console.log(dados));

      }
    }
  }
}
