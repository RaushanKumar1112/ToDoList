import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TaskCRUDServiceService } from '../../services/task-crudservice.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  public tasks: Task[] = [];
  public updatedTask: string = "";
  public editTaskId: number | null = null;

  public constructor(private taskCrudService: TaskCRUDServiceService, private cd: ChangeDetectorRef) {}
  
  ngOnInit() {
    this.loadTasks();
  }

  public loadTasks() {
    console.log("Load Tasks has been called");
    this.taskCrudService.getTasks().subscribe((item: Task[]) => {
      this.tasks = item;
      console.log("Successfully fetched data from db");
      this.cd.detectChanges();
    } )
  }

  public deleteTask(id: number) {
    console.log(id);
    let index = this.tasks.findIndex(item => item.id === id);
    if (index !== -1) {
      this.taskCrudService.deleteTaskById(id).subscribe((item: { message: string; task: Task; }) => {
        console.log(item.message);
        console.log(item.task);
      });
      this.tasks.splice(index, 1);
    }
  }

  public isCompleted(id: number) {
    console.log(id);
    let index = this.tasks.findIndex(item => item.id === id);
    if (index !== -1) {
      if (this.tasks[index].isCompleted) return;
      this.tasks[index].isCompleted = true;
      this.taskCrudService.updateTask(id, this.tasks[index]).subscribe((item: { message: string; task: Task }) => {
        console.log(item.message);
        console.log(item.task);
      });
    }
  }

  // public isUncomplete(id: number) {
  //   console.log(id);
  //   let index = 0;
  //   for (index = 0; index < this.tasks.length; index++){
  //     if (this.tasks[index].id === id) {
  //       this.tasks[index].isCompleted = false;
  //       break;
  //     }
  //   }
  // }

  public updateTasks(id: number) {
    console.log(id);
    console.log(this.editTaskId);
    if (this.editTaskId === id) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index !== -1 && this.updatedTask !== '') {
        this.tasks[index].name = this.updatedTask;
        this.taskCrudService.updateTask(id, this.tasks[index]).subscribe((item: { message: string, task: Task }) => {
          console.log(item.message);
          console.log(item.task);
        });
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
