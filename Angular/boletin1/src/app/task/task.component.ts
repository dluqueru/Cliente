import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [CommonModule, RouterLink],
  templateUrl: './task.component.html'
})
export class TaskComponent {

  @Input() task!:Task

  @Output() toParentComplete = new EventEmitter<string>();
  @Output() toParentDelete = new EventEmitter<string>();

  handleClickComplete(taskId:string){
    this.toParentComplete.emit(taskId)
  }

  handleClickDelete(taskId:string){
    this.toParentDelete.emit(taskId)
  }
}
