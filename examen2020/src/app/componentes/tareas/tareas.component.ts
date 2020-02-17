import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';
import { TareasService } from '../../servicios/tareas.service';

@Component({
    selector: 'app-tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
    // Atributos
    private arrayTareas: Tarea[];
    private totalPendientes: number;
    private totalRealizadas: number;

    constructor(public tareasService: TareasService) { }

    ngOnInit() {
        this.arrayTareas = this.tareasService.getTareas();
        this.totalPendientes = this.tareasService.getTotalPendientes();
        this.totalRealizadas = this.tareasService.getTotalRealizadas();
    }

}
