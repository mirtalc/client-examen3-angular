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

  detectar(event){
    console.log("Evento normal que ha causado esto", event);
    this.emitterHijo.emit(this.tareaHijo.id);
  }
}
