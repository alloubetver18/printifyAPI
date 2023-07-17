import { TestBed } from '@angular/core/testing';

import { PrintifyService } from './printify.service';

describe('PrintifyService', () => {
  let service: PrintifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
