import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USER_FEATURE_KEY, UserState } from "./login.reducer";

export const selectUserState= createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const loggingIn = createSelector(
    selectUserState,
    (state:UserState)=>state?.loggingIn
)
export const token = createSelector(
    selectUserState,
    (state:UserState)=>state?.token
)

export const isUserLoggedIn = createSelector(
    token,
    (token:string)=> token ? true : false
)