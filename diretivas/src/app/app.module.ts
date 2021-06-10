import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { DiretivaNgContentComponent } from './diretiva-ng-content/diretiva-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent,
    DiretivaNgSwitchComponent,
    DiretivaNgForComponent,
    DiretivaNgClassComponent,
    DiretivaNgStyleComponent,
    OperadorElvisComponent,
    DiretivaNgContentComponent,
    FundoAmareloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
