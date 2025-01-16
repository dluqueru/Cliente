import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html'
})
export class TaskComponent {

  @Input() task!:Task

  @Output() toParent = new EventEmitter<number>();

  handleClick(taskId:number){
    this.toParent.emit(taskId)
  }
}
