import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskCRUDServiceService {

  private baseUrl = 'https://localhost:7111/api/Tasks/';

  constructor(private _httpClient: HttpClient) { }
  
  getTasks(): Observable<Task[]>{
    return this._httpClient.get<Task[]>(this.baseUrl);
  }

  getTaskById(id: number): Observable<Task>  {
    return this._httpClient.get<Task>(`${this.baseUrl}/${id}`);
  }

  addTask(task: Task): Observable<string> {
    return this._httpClient.post(this.baseUrl, task, {
      responseType: 'text'
    });
  }

  updateTask(id: number, task: Task): Observable<{ message: string, task: Task }> {
    return this._httpClient.put<{ message: string, task: Task }>(`${this.baseUrl}${id}`, task);
  }

  deleteAllTasks(): Observable<string> {
    return this._httpClient.delete(this.baseUrl, {
      responseType: 'text'
    });
  }

  deleteTaskById(id: number): Observable<{ message: string, task: Task }> {
    return this._httpClient.delete<{ message: string, task: Task }>(`${this.baseUrl}${id}`);
  }
}
