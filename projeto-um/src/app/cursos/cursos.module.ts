import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalhesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})

export class CursosModule { }
