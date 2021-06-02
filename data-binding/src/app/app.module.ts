import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeuFormModule } from './meu-form/meu-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';
import { InputPtopertyComponent } from './input-ptoperty/input-ptoperty.component'

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPtopertyComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    NgbModule,
    AlertModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
