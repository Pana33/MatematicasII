import { Routes } from '@angular/router';
import { PageRoutes } from './shared/enums/page-routes';

export const routes: Routes = [
    {path:'',redirectTo:PageRoutes.HOME,pathMatch:'full'},
    {path:PageRoutes.HOME,loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent),children:[
        {path:'',redirectTo:PageRoutes.HOME,pathMatch:'full'},
        {path:PageRoutes.APPROXIMATE_AREA_UNDER_THE_CURVE,loadComponent: () => import("./pages/approximate-area-under-the-curve/approximate-area-under-the-curve.component").then(m => m.ApproximateAreaUnderTheCurveComponent)},
        {path:'**',redirectTo:PageRoutes.APPROXIMATE_AREA_UNDER_THE_CURVE,pathMatch:'full'}
    ]},
    {path:'**',redirectTo:PageRoutes.HOME,pathMatch:'full'}
];
