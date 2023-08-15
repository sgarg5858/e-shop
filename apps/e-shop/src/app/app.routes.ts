import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'products',
        loadChildren:()=>import('@nx-shop/product').then(c=>c.ProductRoutes)
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'products'
    }
];
