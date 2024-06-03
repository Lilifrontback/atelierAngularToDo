import { Component, OnInit } from '@angular/core';
import {TaskForm} from '../models/task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent  implements OnInit {
  
  task: TaskForm = { title: '', description: '' };

    constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {   
    }

    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');

      if (id) {

          this.taskService.getTask(id).subscribe(task => {
              this.task = task;
          });
      };}

          submit() {
        const id = this.route.snapshot.paramMap.get('id');
        const taskObservable = id ? this.taskService.updateTask(this.task, id) : this.taskService.addTask(this.task);

        taskObservable.subscribe(() => {
            this.router.navigate(['/']);
        });
    }
    }

