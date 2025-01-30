import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ActiveRouteService } from '../../../services/active-route/active-route.service';
import { PageRoutes } from '../../enums/page-routes';

export const activeRouteGuard: CanActivateFn = (route, state) => {
  let activeRouteService = inject(ActiveRouteService)
  let routeToActivate = 0
  switch(route.routeConfig?.path){
    case PageRoutes.APPROXIMATE_AREA_UNDER_THE_CURVE:
      routeToActivate = 1
      break

    case PageRoutes.DEFINITE_AND_INDEFINITE_INEGRAL:
      routeToActivate = 1
      break
  }
  activeRouteService.changeRoute(routeToActivate)
  return true;
};
