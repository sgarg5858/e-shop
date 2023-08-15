import {Route} from '@angular/router'
import { LoginComponent } from './login/login.component'
export const userRoutes:Route[]=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
    }
]