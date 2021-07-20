import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poc-base',
  templateUrl: './poc-base.component.html',
  styleUrls: ['./poc-base.component.css']
})
export class PocBaseComponent implements OnInit {

  @Input() nome!: string;
  @Input() valor!: any;
  @Input() estilo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
