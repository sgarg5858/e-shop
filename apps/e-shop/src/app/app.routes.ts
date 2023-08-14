import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'category/:name',
        loadComponent:()=>import('@nx-shop/product').then(c=>c.ProductComponent)
    },
    // {
    //     path:'',
    //     pathMatch:'full',
    //     redirectTo:'home'
    // }
];
