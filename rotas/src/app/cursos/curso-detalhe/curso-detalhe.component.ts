import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  cursoId!: number;
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
    ) {
    this.cursoId = this.route.snapshot.params['id'];
    //console.log(this.route);
   }

  ngOnInit(): void {
    this.curso = this.cursosService.getCurso(this.cursoId)

    if(this.curso == null){
      this.router.navigate(['/naoEncontrado'])
    }
  }

}
