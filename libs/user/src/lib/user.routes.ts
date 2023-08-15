import {Route} from '@angular/router'
import { LoginComponent } from './login/login.component'
import { provideState } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects';
import {userLoginEffect,userLoginSuccessEffect,autoLoginEffect} from './store/login.effects'
import { USER_FEATURE } from './store/login.reducer';
export const userRoutes:Route[]=[
    {
        path:'login',
        component:LoginComponent,
        providers:[
            provideState(USER_FEATURE),
            provideEffects({userLoginEffect,userLoginSuccessEffect,autoLoginEffect})
        ],
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
    }
]