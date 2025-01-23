import { TestBed } from '@angular/core/testing';

import { TimeOverrideService } from './time-override.service';

describe('TimeOverrideService', () => {
  let service: TimeOverrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeOverrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
