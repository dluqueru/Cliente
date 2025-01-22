import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url:string = "http://localhost:3000/tasks"

  constructor(private httpClient:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.url)
  }

  postTask(newTask:Task):Observable<Task>{
    return this.httpClient.post<Task>(this.url, newTask)
  }

  deleteTask(taskId:string):Observable<Task>{
    return this.httpClient.delete<Task>(this.url + "/" + taskId)
  }
}
