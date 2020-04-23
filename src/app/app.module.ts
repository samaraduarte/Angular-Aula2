import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { DatasComponent } from './datas/datas.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    DatasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
