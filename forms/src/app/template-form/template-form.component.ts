import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    //acima, duas formas diferentes de retonar a mesma coisa usando o two-way data binding!
    //caso use apenas property binding, o form será atualizado, mas o objeto (usuario) não.
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  invalidTouchedField(campo: any) {
    return !campo.valid && campo.touched
  }

  consultaCEP(cep: any) {

    cep = cep.replace(/\D/g, '');

    if (cep != "") {

      const validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => console.log(dados));

      }
    }
  }
}
