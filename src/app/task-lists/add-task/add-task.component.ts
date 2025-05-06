import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskCRUDServiceService } from '../../services/task-crudservice.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  public task: string = "";
  public newTask: Task | undefined;
  public submitted: boolean = true;
  @Output() taskSubmitted = new EventEmitter<string>();

  constructor(private taskCrudService: TaskCRUDServiceService){}

  public onSubmit() {
    
    if (this.task) {
      this.newTask = new Task(this.task);
      this.taskCrudService.addTask(this.newTask).subscribe((item : string) => {
        console.log(item);
        this.task = '';
        this.taskSubmitted.emit(this.newTask!.name);
      })
      // this._dataService.updateTasks(this.newTask); // Send updated task to service
    }
  }

}
