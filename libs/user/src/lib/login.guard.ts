import { inject } from "@angular/core";
import { CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { isUserLoggedIn } from "./store/login.selectors";
import { map } from "rxjs";

export const authLoginGuard : CanActivateFn = (route,segments) => {

    const isLoggedIn = inject(Store).select(isUserLoggedIn);
    const router = inject(Router);

    return isLoggedIn.pipe(map((loggedIn)=> loggedIn ? loggedIn : router.createUrlTree(['user','login']) )) ;
}