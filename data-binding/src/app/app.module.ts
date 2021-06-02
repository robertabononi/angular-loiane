import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeuFormModule } from './meu-form/meu-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
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
