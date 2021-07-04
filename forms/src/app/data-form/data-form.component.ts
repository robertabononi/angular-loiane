import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    //criando formulário instanciando novas classes
    /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),

      endereco: new FormGroup({
        cep: new FormControl(null),
        numero: new FormControl(null),
        ...
      })
    }) */

    //criando formulário com sintaxe simplificada utilizando FormBuilder
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })
  }

  invalidTouchedField(campo: any) {
    campo = this.formulario.get(campo);
    return campo.invalid && campo.touched;
  }

  consultaCEP() {

    let cep = this.formulario.get('endereco.cep')!.value;

    cep = cep.replace(/\D/g, '');

    if (cep != "") {

      const validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)) {

        this.resetaDadosForm()

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe(dados => this.populaDadosForm(dados));

      }
    }
  }

  populaDadosForm(dados:any){

    this.formulario.patchValue({
      endereco: {
        cep:dados.cep,
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro:null,
        cidade: null,
        estado: null
      }
    });
  }


  onSubmit() {
    console.log(this.formulario)

    this.http.post('https://httpbin.org/post',
      JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados);
      this.resetar()
    },
    (error: any) => alert('Erro'));
  }

  resetar() {
    this.formulario.reset();
  }
}
