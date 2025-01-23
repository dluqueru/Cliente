import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'tasks', pathMatch:'full'},
    {path: 'tasks/:id', component: TaskDetailsComponent},
    {path: 'tasks', component: TaskListComponent}
];
