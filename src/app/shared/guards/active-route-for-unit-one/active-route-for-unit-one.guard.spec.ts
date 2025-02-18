import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activeRouteForUnitOneGuard } from './active-route-for-unit-one.guard';

describe('activeRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activeRouteForUnitOneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
