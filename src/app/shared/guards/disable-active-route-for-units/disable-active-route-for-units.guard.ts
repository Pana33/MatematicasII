import { CanActivateFn } from '@angular/router';
import { ActiveRouteService } from '../../../services/active-route/active-route.service';
import { inject } from '@angular/core';

export const disableActiveRouteForUnitsGuard: CanActivateFn = (route, state) => {
  let activeRouteService = inject(ActiveRouteService)
  activeRouteService.changeRoute(0)
  return true;
};
