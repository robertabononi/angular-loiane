import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CursosService } from '../cursos.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
    private alertModalService: AlertModalService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    /* const registro = null;

    this.activatedRoute.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.cursosService.loadById(id))
      )
      .subscribe((curso: any) => {
        registro.curso;
        this.updateForm(curso)
      })
    ; */

    const curso = this.activatedRoute.snapshot.data['curso']

    this.form = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.maxLength(150)]]
    })

  }

  /* updateForm(curso: any) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  } */

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    console.log(this.form.value)
    this.submitted = true;

    if (this.form.valid) {
      console.log('onSubmit')

      let successMessage = 'Curso criado com sucesso!';
      let errorMessage = 'Erro ao criar curso. Tente novamente.';

      if (this.form.value.id) {
        successMessage = 'Curso atualizado com sucesso!';
        errorMessage = 'Erro ao atualizar curso. Tente novamente.'
      }

      this.cursosService.save(this.form.value).subscribe(
        success => {
          this.alertModalService.showAlertSuccess(successMessage);
          this.location.back();
        },
        error => {
          this.alertModalService.showAlertDanger(errorMessage),
          () => console.log('Update completo')
        }
      )

      /* if (this.form.value.id) {
        this.cursosService.update(this.form.value).subscribe(
          success => {
            this.alertModalService.showAlertSuccess('Curso atualizado com sucesso.');
            this.location.back();
          },
          error => this.alertModalService.showAlertDanger('Erro ao atualizar curso. Tente novamente.'),
          () => console.log('Update completo')
        )
      } else {
        this.cursosService.create(this.form.value).subscribe(
          success => {
            this.alertModalService.showAlertSuccess('Curso criado com sucesso.');
            this.location.back();
          },
          error => this.alertModalService.showAlertDanger('Erro ao criar curso. Tente novamente.'),
          () => console.log('Request completo')
        );
      } */
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('onCancel')
  }

}
