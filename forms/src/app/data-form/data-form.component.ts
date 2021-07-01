import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
    ) {
    //criando formulário com sintaxe simplificada utilizando FormBuilder
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

  ngOnInit(): void {

    //criando formulário instanciando novas classes
    /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    }) */


  }

  onSubmit() {
    console.log(this.formulario.value)

    this.http.post('https://httpbin.org/post',
      JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados);
      this.formulario.reset()
    },
    (error: any) => alert('Erro'));
  }

  resetar() {
    this.formulario.reset();
  }
}
