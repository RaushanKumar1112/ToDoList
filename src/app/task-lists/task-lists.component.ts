import { Component, ViewChild } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: 'app-task-lists',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent, CommonModule],
  templateUrl: './task-lists.component.html',
  styleUrl: './task-lists.component.scss'
})
  
export class TaskListsComponent {
  public addTask: boolean = false;

  @ViewChild(TaskComponent) private taskList!: TaskComponent;

  constructor(){}

  ngOnInit() {}

  public handleSubmit(task: string) {
    console.log("add new task:", task);
    this.addTask = false;
    this.taskList.loadTasks();
  }
}
