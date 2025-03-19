import { TestBed } from '@angular/core/testing';

import { ServeEService } from './serve-e.service';

describe('ServeEService', () => {
  let service: ServeEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
