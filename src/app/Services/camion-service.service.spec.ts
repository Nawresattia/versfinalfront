import { TestBed } from '@angular/core/testing';

import { CamionServiceService } from './camion-service.service';

describe('CamionServiceService', () => {
  let service: CamionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
