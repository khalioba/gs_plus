import { TestBed } from '@angular/core/testing';

import { ServeAService } from './serve-a.service';

describe('ServeAService', () => {
  let service: ServeAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
