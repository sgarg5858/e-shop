import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const LoginActions = createActionGroup({
    source:'Login Form',
    events:{
        checkSessionStorage: emptyProps(),
        makeLoginRequest: props<{username:string,password:string}>(),
        loginSuccess:props<{token:string}>(),
        loginFailed:props<{error:string}>()
    }
})