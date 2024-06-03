export interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
  }
  export type TaskForm = Pick<Task, 'title' | 'description'>;

//   let tasks: Task[] = [
//     {   id: '1',
//         title: 'Tâche 1',
//         description: 'Description de la tâche 1',
//         createdAt: new Date()
//     },
//     {   id: '2',
//         title: 'Tâche 2',
//         description: 'Description de la tâche 2',
//         createdAt: new Date()
//     }
// ];