import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { BorrartareasComponent } from './componentes/borrartareas/borrartareas.component';
import { FinalizartareasComponent } from './componentes/finalizartareas/finalizartareas.component';
import { TareasService } from './servicios/tareas.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    NoencontradoComponent,
    TareaComponent,
    TareasComponent,
    BorrartareasComponent,
    FinalizartareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
