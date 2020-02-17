import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  // Atributos
  private tareas: Tarea[] = [
    {
      id: 1,
      nombre: 'Examen Cliente',
      estado: 'Pendiente'
    },
    {
      id: 2,
      nombre: 'Examen Servidor',
      estado: 'Pendiente'
    },
    {
      id: 3,
      nombre: 'Examen Interfaces',
      estado: 'Realizada'
    },
    {
      id: 4,
      nombre: 'Examen Despliegue',
      estado: 'Pendiente'
    }
  ];

  constructor() { }

  // Otros métodos
  getTareas(): Tarea[] {
    return this.tareas;
  }

  getTarea(id: number): Tarea {
    let pos: number = this.tareas.findIndex(tar => tar.id == id);
    return this.tareas[pos];
  }

  endTarea(id: number): void{
    let pos: number = this.tareas.findIndex(tar => tar.id == id);
    let miTarea: Tarea = this.tareas[pos];
    this.tareas[pos].estado = "Realizada";
  }

  getTotalPendientes(): number{
    let total: number = 0;
    this.tareas.map(tarea => {
      if(tarea.estado == "Pendiente"){
        total++;
      }
    });
    return total;
  }

  getTotalRealizadas(): number{
    let total: number = 0;
    this.tareas.map(tarea => {
      if(tarea.estado == "Realizada"){
        total++;
      }
    });
    return total;
  }

  deleteTarea(id): void{
    let pos: number = this.tareas.findIndex(tar => tar.id == id);

    if (pos != -1 ) {
      this.tareas.splice(pos, 1);
    } else {
      console.log('Algo raro ha pasado. La tarea que se quería borrar ya no estaba.');
    }
  }
}
