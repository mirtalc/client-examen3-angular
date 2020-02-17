import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  // Atributos
  @Input() tareaHijo: Tarea;
  @Output() emitterHijo: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  detectar(event) {
    this.emitterHijo.emit(this.tareaHijo.id);
    console.log("Evento normal de DOM que ha causado esto", event);
  }
}
