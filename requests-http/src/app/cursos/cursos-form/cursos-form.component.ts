import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export abstract class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(150)]]
    })

  }

  abstract submit(): any;

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    //console.log(this.form.value)
    this.submitted = true;

    if (this.form.valid) {
      console.log('onSubmit')
      this.submit();
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('onCancel')
  }

}
