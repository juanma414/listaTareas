import { Component } from '@angular/core';
import {Tarea} from 'src/app/models/Tarea'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea[]=[]
  nombreTarea = '';

  agregarTarea(){
    //crear un obj tarea
    const tarea: Tarea = {
      nombre:this.nombreTarea,
      estado: false
    }
    //Agregar el obj tarea al array;
    this.listaTareas.push(tarea);
    //reset form
    this.nombreTarea=''
  }

  eliminarTarea(i:number):void{
    this.listaTareas.splice(i,1)
  }

  actualizarTarea(tarea:Tarea,i:number):void{
    this.listaTareas[i].estado = !tarea.estado
  }
}
 