import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { disableActiveRouteForUnitsGuard } from './disable-active-route-for-units.guard';

describe('disableActiveRouteForUnitsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => disableActiveRouteForUnitsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
