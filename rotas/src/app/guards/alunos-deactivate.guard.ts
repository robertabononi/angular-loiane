import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IFormCanDeactivate } from './i-form-candeactivate';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('guarda de desativação');

    //return component.podeMudarRota(); não utilizamos com a interface pois está no componente AlunoFormComponent.

    return component.podeDesativar();
  }

}
