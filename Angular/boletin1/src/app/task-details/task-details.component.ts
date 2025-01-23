import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task-details',
  imports: [],
  template: `
    <h2>Mostrando tarea {{task.title}}</h2>
    <p>
      Título: {{task.title}}
    </p>
    <br>
    <p>
      Estado: {{task.completed}}
    </p>
    <br>
    <p>
      Id: {{task.id}}
    </p>
  `
})
export class TaskDetailsComponent implements OnInit{

  constructor(private taskService:TaskService){ }

  @Input() id!:string;
  task!: Task;
  
  ngOnInit(): void {
    this.taskService.getTaskById(this.id)
    .subscribe({
      next: task => {
        console.log('pasó');
        this.task = task
      },
      error: error => console.log('Error: ' + error)
    })
  }
  
}
