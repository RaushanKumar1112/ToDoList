import { TestBed } from '@angular/core/testing';

import { AddTaskServiceService } from './add-task-service.service';

describe('AddTaskServiceService', () => {
  let service: AddTaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
