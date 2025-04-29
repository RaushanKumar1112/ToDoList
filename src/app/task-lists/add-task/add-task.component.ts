import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { AddTaskServiceService } from '../../services/add-task-service.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  public task: string = "";
  public newTask: Task | undefined;
  public submitted: boolean = true;
  @Output() taskSubmitted = new EventEmitter<string>();

  constructor(private _dataService: AddTaskServiceService){}

  public onSubmit() {
    
    if (this.task) {
      this.newTask = new Task(this.task, false);
      this._dataService.updateTasks(this.newTask); // Send updated task to service
      this.task = ''; // Clear the input field after adding
      this.taskSubmitted.emit(this.newTask.task);
    }
  }

}
