import { TestBed } from '@angular/core/testing';

import { ApiExternesService } from './api-externes.service';

describe('ApiExternesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiExternesService = TestBed.get(ApiExternesService);
    expect(service).toBeTruthy();
  });
});
