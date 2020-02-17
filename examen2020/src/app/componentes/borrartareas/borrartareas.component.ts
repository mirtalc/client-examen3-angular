import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';
import { Router } from '@angular/router';
import { TareasService } from '../../servicios/tareas.service';


@Component({
  selector: 'app-borrartareas',
  templateUrl: './borrartareas.component.html',
  styleUrls: ['./borrartareas.component.scss']
})
export class BorrartareasComponent implements OnInit {
  // Atributos
  private tareaPadre: Tarea;
  private arrayTareas: Tarea[];

  constructor(public tareasService: TareasService, public router: Router) { }

  ngOnInit() {
    this.arrayTareas = this.tareasService.getTareas();
  }

  volver(): void{
    this.router.navigate(['/listado']);
  }

  borrar(parametroDelHijo): void{
    this.tareasService.deleteTarea(parametroDelHijo);
    this.volver();
  }
}
