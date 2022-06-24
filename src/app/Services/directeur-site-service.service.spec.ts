import { TestBed } from '@angular/core/testing';

import { DirecteurSiteServiceService } from './directeur-site-service.service';

describe('DirecteurSiteServiceService', () => {
  let service: DirecteurSiteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirecteurSiteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
