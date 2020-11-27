import { TestBed } from '@angular/core/testing';

import { ProductData } from './products-data.service';

describe('ProductsDataService', () => {
  let service: ProductData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
