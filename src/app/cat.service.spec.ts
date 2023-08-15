import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { CatalogueService } from './cat.service';

describe('CatService', () => {
  let service: CatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
