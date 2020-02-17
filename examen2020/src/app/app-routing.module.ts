import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { BorrartareasComponent } from './componentes/borrartareas/borrartareas.component';
import { FinalizartareasComponent } from './componentes/finalizartareas/finalizartareas.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'listado', component: TareasComponent },
  { path: 'borrarTarea', component: BorrartareasComponent},
  { path: 'finalizarTarea/:id', component: FinalizartareasComponent },
  { path: '**', component: NoencontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
