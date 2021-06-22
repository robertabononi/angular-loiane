import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    //console.log(childRoute);
    //console.log(state);

    console.log('AlunosGuard: Guarda de rota filha');

    if(state.url.includes('editar')){
      //alert('Usuário sem acesso.')
      //return of(false); //retornando com um Observable
    }
    return true; //retornando com boolean
  }

}
