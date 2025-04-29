import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './../models/task';

@Injectable({
  providedIn: 'root'
})
export class AddTaskServiceService {

  private tasksSubject = new BehaviorSubject<Task[]>([]); 
  tasks$ = this.tasksSubject.asObservable();
  
  constructor() { }

  updateTasks(newTask: Task) {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, newTask]);
  }
}
