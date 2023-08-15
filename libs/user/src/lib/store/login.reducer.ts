import { createFeature, createReducer, on } from "@ngrx/store";
import { LoginActions } from "./login.actions";

export const USER_FEATURE_KEY='user';
export interface UserState{
    loggingIn:boolean;
    token:string;
    error:string;
    
}

const initialUserState:UserState={
    loggingIn:false,
    token:"",
    error:""
}
export const userReducer = createReducer(
    initialUserState,
    on(LoginActions.makeLoginRequest,(state)=>{
        return {
            ...state,loggingIn:true,token:"",error:""
        }
    }),
    on(LoginActions.loginSuccess,(state,action)=>{
        return {
            ...state,loggingIn:false,token:action.token,error:""
        }
    }),
    on(LoginActions.makeLoginRequest,(state)=>{
        return {
            ...state, loggingIn:false,token:"",error:"Login Failed"
        }
    })
)

export const USER_FEATURE = createFeature({
    name:USER_FEATURE_KEY,
    reducer:userReducer
})