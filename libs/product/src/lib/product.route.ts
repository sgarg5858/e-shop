import {Route} from '@angular/router'
import { ProductComponent } from './product/product.component'
import { provideState } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { productFeature } from './store/product.reducer'
import { loadProducts } from './store/product.effect'

export const ProductRoutes:Route[]=[
    {
        path:':categoryName',
        component:ProductComponent,
        providers:[
            provideState(productFeature),
            provideEffects({loadProducts})
        ]
    }
]