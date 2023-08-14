import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Route[] = [
    {
        path:'category',
        loadChildren:()=>import('@nx-shop/product').then(c=>c.ProductRoutes)
    },
    // {
    //     path:'',
    //     pathMatch:'full',
    //     redirectTo:'home'
    // }
];
