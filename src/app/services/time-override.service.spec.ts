import { TestBed } from '@angular/core/testing';

import { OverrideService } from './time-override.service';

describe('TimeOverrideService', () => {
  let service: OverrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
