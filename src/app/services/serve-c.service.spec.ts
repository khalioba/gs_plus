import { TestBed } from '@angular/core/testing';

import { ServeCService } from './serve-c.service';

describe('ServeCService', () => {
  let service: ServeCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
