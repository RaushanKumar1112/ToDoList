import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { AddTaskServiceService } from '../../services/add-task-service.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  public tasks: Task[];
  public updatedTask: string = "";
  public editTaskId: number | null = null;

  public constructor(private _taskService: AddTaskServiceService) {
    this.tasks = [
      {
        id: 1,
        task: 'Go to Gym',
        isCompleted: false
      },
      {
        id: 2,
        task: 'Play Cricket',
        isCompleted: false
      }
    ];
  }
  
  ngOnInit() {
    this._taskService.tasks$.subscribe((task: Task[]) => {
      this.tasks = task;
    })
  }

  public deleteTask(id: number) {
    console.log(id);
    let index = 0;
    for (index = 0; index < this.tasks.length; index++){
      if (this.tasks[index].id === id) {
        break;
      }
    }

    this.tasks.splice(index, 1);
  }

  public isCompleted(id: number) {
    console.log(id);
    let index = 0;
    for (index = 0; index < this.tasks.length; index++){
      if (this.tasks[index].id === id) {
        this.tasks[index].isCompleted = true;
        break;
      }
    }
  }

  public isUncomplete(id: number) {
    console.log(id);
    let index = 0;
    for (index = 0; index < this.tasks.length; index++){
      if (this.tasks[index].id === id) {
        this.tasks[index].isCompleted = false;
        break;
      }
    }
  }

  public updateTasks(id: number) {
    console.log(id);
    if (this.editTaskId === id) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index !== -1 && this.updatedTask !== '') {
        this.tasks[index].task = this.updatedTask;
      }
      this.editTaskId = null; // exit edit mode
      this.updatedTask = '';
    } else {
      // Not editing yet, enter edit mode
      this.editTaskId = id;
      this.updatedTask = ''; // preload existing value
    }
  }

}
