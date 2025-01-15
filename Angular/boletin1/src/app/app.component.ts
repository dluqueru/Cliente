import { Component } from '@angular/core';
import { Task } from './interfaces/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule]
})
export class AppComponent {
  title = 'boletin1';
  tasks:Task[] = 
  [
      {
        id: 1,
        title: 'Tarea 1',
        completed: true
      },
      {
        id: 2,
        title: 'Tarea 2',
        completed: false
      },
      {
        id: 3,
        title: 'Tarea 3',
        completed: true
      }
  ]

  getTaskById(taskId:number):Task|undefined{
    return this.tasks.find( task => task.id == taskId)
  }

  handleClick(taskId:number):void{
    let task = this.getTaskById(taskId);
    if(task){
      task.completed = !task.completed
    }
  }
  
}
