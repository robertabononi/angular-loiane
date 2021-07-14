import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit(): any;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('form inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo)

      const controller = formGroup.get(campo);
      controller?.markAsDirty();
      controller?.markAsTouched();

      if (controller instanceof FormGroup || controller instanceof FormArray) {
        this.verificaValidacoesForm(controller)
      }

    })
  }

  resetar() {
    this.formulario.reset();
  }

  invalidTouchedField(campo: any) {
    campo = this.formulario.get(campo);
    return campo.invalid && (campo.touched || campo.dirty);
  }

  verificaRequired(campo: any) {
    campo = this.formulario.get(campo);
    return campo.hasError('required') && (campo.touched || campo.dirty)
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.invalidTouchedField(campo)
    }
  }

  getCampo(campo: string) {
    return this.formulario.get(campo)
  }

}
