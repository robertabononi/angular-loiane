import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario:any = {
    nome: 'Roberta',
    email: 'roberta@email.com'
  }

  onSubmit(form: any){
    console.log(form.value)
    console.log(this.usuario)
    //acima, duas formar diferentes de retonar a mesma coisa usando o two-way data binding!
    //caso use apenas property binding, o form será atualizado, mas o objeto (usuario) não.
  }

  constructor() { }

  ngOnInit(): void {
  }

}
