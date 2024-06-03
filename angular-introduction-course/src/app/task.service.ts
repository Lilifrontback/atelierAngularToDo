import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { v4 as uuid } from 'uuid';
import { TaskForm } from './models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  // tasks: Task[] = [
  //   {
  //     id: uuid(),
  //     title: 'Tâche 1',
  //     description: 'Description de la tâche 1',
  //     createdAt: new Date(),
  //   },
  //   {
  //     id: uuid(),
  //     title: 'Tâche 2',
  //     description: 'Description de la tâche 2',
  //     createdAt: new Date(),
  //   },
  // ];

  addTask(task: TaskForm) {
    return this.http.post<Task>('http://localhost:3000/tasks', {
      ...task,
      createdAt: new Date(),
    });
  }
  getTask(id: string) {
    return this.http.get<Task>(`http://localhost:3000/tasks/${id}`);
  }

  getTasks() {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  updateTask(task: Partial<Task>, id: string) {
    return this.http.patch<Task>(`http://localhost:3000/tasks/${id}`, task);
  }
  deleteTask(id: string) {
    return this.http.delete<Task>(`http://localhost:3000/tasks/${id}`);
  }
}
