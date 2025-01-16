import { Component } from '@angular/core';
import { Task } from './interfaces/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, FormsModule, TaskComponent]
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

  newTaskTitle:string = '';

  getTaskById(taskId:number):Task|undefined{
    return this.tasks.find( task => task.id == taskId)
  }

  handleClick(taskId:number):void{
    let task = this.getTaskById(taskId);
    if(task){
      task.completed = !task.completed
    }
  }
  
  addTask():void{
    let newTask:Task = {
      id: this.tasks.length + 1,
      title: this.newTaskTitle,
      completed: false
    }
    this.tasks.push(newTask);
    this.newTaskTitle = '';
  }

  showAlert():boolean{
    return this.newTaskTitle.trim() === '';
  }
  
}
