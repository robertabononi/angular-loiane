import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Cargo } from '../shared/models/cargo';
import { Tecnologia } from '../shared/models/tecnologia';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;
  estados!: Observable<EstadoBr[]>;
  cargos!: Cargo[];
  tecnologias!: Tecnologia[];
  newsletters!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService
    ) {}

  ngOnInit(): void {

    this.estados = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletters = this.dropdownService.getNewsletter()

    /* this.dropdownService.getEstadosBr()
      .subscribe(dados => {
        this.estados = dados;
        console.log(dados);
      }) */

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
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: ['sim'],
      aceitarTermos: [null, Validators.requiredTrue]
    })
  }

  invalidTouchedField(campo: any) {
    campo = this.formulario.get(campo);
    return campo.invalid && (campo.touched || campo.dirty);
  }

  consultaCEP() {

    let cep = this.formulario.get('endereco.cep')!.value;

    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados));
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

    this.formulario.get('endereco.complemento')?.setValue('Casa');
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

    if (this.formulario.valid) {

      this.http.post('https://httpbin.org/post',
      JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        //this.resetar()
      },
      (error: any) => alert('Erro'));

    } else {
      console.log('form inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo)

      const controller = formGroup.get(campo);
      controller?.markAsDirty();

      if (controller instanceof FormGroup) {
        this.verificaValidacoesForm(controller)
      }

    })
  }

  resetar() {
    this.formulario.reset();
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargos(objeto1: Cargo, objeto2: Cargo): boolean {
    return objeto1 && objeto2 ? (objeto1.nivel === objeto2.nivel && objeto1.descricao === objeto2.descricao) : objeto1 === objeto2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias')?.setValue(['javascript', 'java', 'ruby'])
  }
}
