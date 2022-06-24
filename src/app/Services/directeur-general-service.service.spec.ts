import { TestBed } from '@angular/core/testing';

import { DirecteurGeneralServiceService } from './directeur-general-service.service';

describe('DirecteurGeneralServiceService', () => {
  let service: DirecteurGeneralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirecteurGeneralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
