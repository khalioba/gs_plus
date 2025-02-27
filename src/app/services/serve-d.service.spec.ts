import { TestBed } from '@angular/core/testing';

import { ServeDService } from './serve-d.service';

describe('ServeDService', () => {
  let service: ServeDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
