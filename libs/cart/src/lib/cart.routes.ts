import {Route} from '@angular/router'
import { CartComponent } from './cart/cart.component'
import { provideState } from '@ngrx/store'
import { CART_FEATURE } from './store/cart.reducer'
import { provideEffects } from '@ngrx/effects'
import { loadCartEffect } from './store/cart.effects'
export const CartRoutes:Route[]=[
    {
        path:'',
        component:CartComponent,
        providers:[
            provideState(CART_FEATURE),
            provideEffects({loadCartEffect})
        ]
    }
]