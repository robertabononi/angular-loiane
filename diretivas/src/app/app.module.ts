import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent,
    DiretivaNgSwitchComponent,
    DiretivaNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
