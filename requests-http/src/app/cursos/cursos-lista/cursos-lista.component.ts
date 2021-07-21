import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CursosService } from '../cursos.service';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  //cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado!: Curso;

  constructor(
    private service: CursosService,
    private alertModal: AlertModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          //this.error$.next(true)
          this.handleError();
          return EMPTY;
        })
      )
    ;
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.activatedRoute })
  }


  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete(): void {
    this.service.remove(this.cursoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.onDeclineDelete();
      },
      error => {
        this.alertModal.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        this.onDeclineDelete();
      }
    )
  }

  onDeclineDelete(): void {
    this.deleteModalRef.hide()
  }

  handleError() {
    this.alertModal.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }
}
