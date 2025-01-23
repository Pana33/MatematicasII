import { Routes } from '@angular/router';
import { PageRoutes } from './shared/enums/page-routes';
import { activeRouteGuard } from './shared/guards/active-route/active-route.guard';

export const routes: Routes = [
    {path:'',redirectTo:PageRoutes.HOME,pathMatch:'full'},
    {path:PageRoutes.HOME,loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent),children:[
        {path:'',redirectTo:PageRoutes.HOME,pathMatch:'full'},
        {path:PageRoutes.BOOK_COVER,loadComponent: () => import("./pages/book-cover/book-cover.component").then(m => m.BookCoverComponent),canActivate:[activeRouteGuard]},
        {path:PageRoutes.APPROXIMATE_AREA_UNDER_THE_CURVE,loadComponent: () => import("./pages/approximate-area-under-the-curve/approximate-area-under-the-curve.component").then(m => m.ApproximateAreaUnderTheCurveComponent),canActivate:[activeRouteGuard]},
        {path:'**',redirectTo:PageRoutes.BOOK_COVER,pathMatch:'full'}
    ]},
    {path:'**',redirectTo:PageRoutes.HOME,pathMatch:'full'}
];
