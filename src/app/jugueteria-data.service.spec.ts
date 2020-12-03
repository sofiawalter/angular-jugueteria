import { TestBed } from '@angular/core/testing';

import { JugueteriaDataService } from './jugueteria-data.service';

describe('JugueteriaDataService', () => {
  let service: JugueteriaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugueteriaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
