/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DebtOnFocusService } from './debtOnFocus.service';

describe('Service: DebtOnFocus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebtOnFocusService]
    });
  });

  it('should ...', inject([DebtOnFocusService], (service: DebtOnFocusService) => {
    expect(service).toBeTruthy();
  }));
});
