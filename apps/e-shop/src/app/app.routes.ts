import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'products',
        loadChildren:()=>import('@nx-shop/product').then(c=>c.ProductRoutes)
    },
    {
        path:'cart',
        loadChildren:()=>import('@nx-shop/cart').then(c=>c.CartRoutes)
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'products'
    }
];
