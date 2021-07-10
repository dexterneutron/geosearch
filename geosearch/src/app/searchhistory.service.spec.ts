import { TestBed } from '@angular/core/testing';

import { SearchhistoryService } from './searchhistory.service';

describe('SearchhistoryService', () => {
  let service: SearchhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
