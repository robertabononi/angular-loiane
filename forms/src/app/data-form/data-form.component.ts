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
      email: new FormControl(null)
    }) */
    //criando formulário com sintaxe simplificada utilizando FormBuilder
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    })
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
