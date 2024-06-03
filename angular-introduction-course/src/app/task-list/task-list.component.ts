import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {

  tasks$ = this.taskService.getTasks();

    constructor(private taskService: TaskService) {}
   

         deleteTask(id: string): void {
         this.taskService.deleteTask(id).subscribe(() => {
             document.location.reload();
         });
     }
}