import { TestBed } from '@angular/core/testing';

import { TaskCRUDServiceService } from './task-crudservice.service';

describe('TaskCRUDServiceService', () => {
  let service: TaskCRUDServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCRUDServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
