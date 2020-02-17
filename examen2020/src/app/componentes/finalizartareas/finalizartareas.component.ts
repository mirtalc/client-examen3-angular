import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TareasService } from '../../servicios/tareas.service';

@Component({
  selector: 'app-finalizartareas',
  templateUrl: './finalizartareas.component.html',
  styleUrls: ['./finalizartareas.component.scss']
})
export class FinalizartareasComponent implements OnInit {
  // Atributos
  private tarea;
  private idParam;

  constructor(
      public router: Router,
      public activatedRoute: ActivatedRoute,
      public tareasService: TareasService) {
          this.idParam = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.tarea = this.tareasService.getTarea(parseInt(this.idParam));
  }

  volver(): void{
    this.router.navigate(['/listado']);
  }

  finalizar(): void{
    this.tareasService.endTarea(this.tarea.id);
    this.volver();
  }
}
