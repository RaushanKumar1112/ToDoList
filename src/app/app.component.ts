import { Component } from '@angular/core';
import { TaskListsComponent } from './task-lists/task-lists.component';

@Component({
  selector: 'app-root',
  imports: [TaskListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ToDoList';
}
