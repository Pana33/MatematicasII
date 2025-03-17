import { Routes } from '@angular/router';
import { PageRoutes } from './shared/enums/page-routes';
import { activeRouteForUnitOneGuard } from './shared/guards/active-route-for-unit-one/active-route-for-unit-one.guard';
import { disableActiveRouteForUnitsGuard } from './shared/guards/disable-active-route-for-units/disable-active-route-for-units.guard';
import { activeRouteForUnitTwoGuard } from './shared/guards/active-route-for-unit-two/active-route-for-unit-two.guard';

export const routes: Routes = [
    {path:'',redirectTo:PageRoutes.HOME,pathMatch:'full'},
    {path:PageRoutes.HOME,loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent),children:[
        {path:'',redirectTo:PageRoutes.HOME,pathMatch:'full'},
        {path:PageRoutes.BOOK_COVER,loadComponent: () => import("./pages/book-cover/book-cover.component").then(m => m.BookCoverComponent),canActivate:[disableActiveRouteForUnitsGuard]},
        {path:PageRoutes.APPROXIMATE_AREA_UNDER_THE_CURVE,loadComponent: () => import("./pages/approximate-area-under-the-curve/approximate-area-under-the-curve.component").then(m => m.ApproximateAreaUnderTheCurveComponent),canActivate:[activeRouteForUnitOneGuard]},
        {path:PageRoutes.DEFINITE_AND_INDEFINITE_INEGRAL,loadComponent: () => import("./pages/definite-and-indefinite-integral/definite-and-indefinite-integral.component").then(m => m.DefiniteAndIndefiniteIntegralComponent),canActivate:[activeRouteForUnitOneGuard]},
        {path:PageRoutes.INEGRAL_BY_SUSTITUTION,loadComponent: () => import("./pages/integral-by-sustitution/integral-by-sustitution.component").then(m => m.IntegralBySustitutionComponent),canActivate:[activeRouteForUnitOneGuard]},
        {path:PageRoutes.INTEGRATION_BY_PARTS,loadComponent: () => import("./pages/integration-by-parts/integration-by-parts.component").then(m => m.IntegrationByPartsComponent),canActivate:[activeRouteForUnitOneGuard]},
        {path:PageRoutes.CALCULUS_OF_SEVERAL_VARIABLES,loadComponent: () => import("./pages/calculus-of-several-variables/calculus-of-several-variables.component").then(m => m.CalculusOfSeveralVariablesComponent),canActivate:[activeRouteForUnitTwoGuard]},
        {path:'**',redirectTo:PageRoutes.BOOK_COVER,pathMatch:'full'}
    ]},
    {path:'**',redirectTo:PageRoutes.HOME,pathMatch:'full'}
];
