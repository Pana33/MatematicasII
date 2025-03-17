import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activeRouteForUnitTwoGuard } from './active-route-for-unit-two.guard';

describe('activeRouteForUnitTwoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activeRouteForUnitTwoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
