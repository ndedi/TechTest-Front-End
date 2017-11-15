import { TestBed, inject } from '@angular/core/testing';

import { AviationService } from './aviation.service';

describe('AviationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AviationService]
    });
  });

  it('should be created', inject([AviationService], (service: AviationService) => {
    expect(service).toBeTruthy();
  }));
});
