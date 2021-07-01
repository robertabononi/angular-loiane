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

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .subscribe(dados => {
      console.log(dados);

      form.form.reset();
    });
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  invalidTouchedField(campo: any) {
    return !campo.valid && campo.touched
  }

  consultaCEP(cep: any, form: any) {

    cep = cep.replace(/\D/g, '');

    if (cep != "") {

      const validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)) {

        this.resetaDadosForm(form)

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => this.populaDadosForm(dados, form));

      }
    }
  }

  populaDadosForm(dados: any, formulario: any){
    /* formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep:dados.cep,
        rua: dados.logradouro,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    }) */

    formulario.form.patchValue({
      endereco: {
        cep:dados.cep,
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })

    //console.log(formulario)

  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro:null,
        cidade: null,
        estado: null
      }
    });
  }
}
