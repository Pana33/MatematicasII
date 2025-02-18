import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ActiveRouteService } from '../../../services/active-route/active-route.service';

export const activeRouteForUnitOneGuard: CanActivateFn = (route, state) => {
  let activeRouteService = inject(ActiveRouteService)
  activeRouteService.changeRoute(1)
  return true;
};
