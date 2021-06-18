import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.email === 'usuario@email.com' && usuario.senha === '123456'){

      this.usuarioAutenticado = true;

      this.router.navigate(['/']);

    } else {

      this.usuarioAutenticado = false;

    }
  }
}
