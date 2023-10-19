import { TestBed } from '@angular/core/testing';

import { ApiIncidenciasService } from './api-incidencias.service';

describe('ApiIncidenciasService', () => {
  let service: ApiIncidenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIncidenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
