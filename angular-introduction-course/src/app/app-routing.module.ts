import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskFormComponent} from './task-form/task-form.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'add-task', component: TaskFormComponent},
  { path: 'update/:id', component: TaskFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
