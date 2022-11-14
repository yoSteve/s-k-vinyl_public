import { TestBed } from '@angular/core/testing';

import { LastFMService } from './last-fm.service';

describe('LastFMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastFMService = TestBed.get(LastFMService);
    expect(service).toBeTruthy();
  });
});
