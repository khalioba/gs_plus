import { TestBed } from '@angular/core/testing';

import { ServeBService } from './serve-b.service';

describe('ServeBService', () => {
  let service: ServeBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
