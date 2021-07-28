import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { ReactiveSearchComponent } from './reactive-search/reactive-search.component';


@NgModule({
  declarations: [
    ReactiveSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveSearchRoutingModule
  ]
})
export class ReactiveSearchModule { }
