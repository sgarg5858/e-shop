import {Route} from '@angular/router'
import { ProductComponent } from './product/product.component'
import { provideState } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { productFeature } from './store/product.reducer'
import { loadAllProductsEffect,loadProductsByCategory } from './store/product.effect'

export const ProductRoutes:Route[]=[
    {
        path:'',
        component:ProductComponent,
        providers:[
            provideState(productFeature),
            provideEffects({loadProductsByCategory,loadAllProductsEffect})
        ]
    },
    {
        path:'category/:categoryName',
        component:ProductComponent,
       
    }
]