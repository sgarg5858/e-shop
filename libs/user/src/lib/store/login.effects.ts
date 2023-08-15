import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../login.service";
import { LoginActions } from "./login.actions";
import { catchError, delay, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";


export const userLoginEffect = createEffect(
    (actions$=inject(Actions),loginService=inject(LoginService)) =>  actions$.pipe(
        ofType(LoginActions.makeLoginRequest),
        mergeMap(({username,password})=> loginService.login(username,password).pipe(
            map(({token})=> LoginActions.loginSuccess({token})),
            catchError(()=> of(LoginActions.loginFailed({error:"Login Failed"})))
        ))
    ),{
        functional:true
    }
)
export const autoLoginEffect = createEffect(
    (actions$=inject(Actions),store=inject(Store)) =>  actions$.pipe(
        ofType(LoginActions.checkSessionStorage),
        tap(()=>{
            const token =sessionStorage.getItem('token');
            if(token)
            {
                store.dispatch(LoginActions.loginSuccess({token}))
            }
        })
    ),{
        functional:true,dispatch:false
    }
)

export const userLoginSuccessEffect = createEffect(
    (
        actions$=inject(Actions),
        router=inject(Router)) =>  actions$.pipe(
        ofType(LoginActions.loginSuccess),
        tap(({token})=>{
            router.navigate(['products']);
            sessionStorage.setItem('token',token)
        })
    ),{
        functional:true,
        dispatch:false
    }
)