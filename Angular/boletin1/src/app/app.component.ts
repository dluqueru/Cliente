import { Component, OnInit } from '@angular/core';
import { Task } from './interfaces/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from "./task/task.component";
import { TaskService } from './services/task-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, FormsModule, TaskComponent]
})
export class AppComponent implements OnInit {
  title = 'boletin1';

  tasks:Task[] = [];

  newTaskTitle:string = '';

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe({
        next: tasks => {
          this.tasks = tasks
        },
        error: error => console.log('Error: ' + error)
      })
  }

  getTaskById(taskId:string):Task|undefined{
    return this.tasks.find( task => task.id == taskId)
  }

  handleClickComplete(taskId:string):void{
    let task = this.getTaskById(taskId);
    if(task){
      task.completed = !task.completed
    }
  }

  handleClickDelete(taskId:string):void{
    let task = this.getTaskById(taskId);
    if(task){
      this.deleteTask(taskId)
    }
  }
  
  addTask():void{
    let newTask:Task = {
      id: (Math.random() * 10000).toString(),
      title: this.newTaskTitle,
      completed: false
    }
    this.taskService.postTask(newTask)
      .subscribe({
        next: task => {
          this.tasks.push(task)
        },
        error: error => console.log("Error: " + error)
      })
    this.newTaskTitle = '';
  }

  deleteTask(taskId:string):void{
    let taskToDelete:Task|undefined = this.getTaskById(taskId);

    if(taskToDelete){
      this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);
    }
  }

  showAlert():boolean{
    return this.newTaskTitle.trim() === '';
  }
  
}
