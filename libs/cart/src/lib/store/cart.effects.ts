import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartService } from "../cart.service";
import { CartActions } from "./cart.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { Cart } from "../cart.model";

export const loadCartEffect = createEffect(
    (actions$=inject(Actions),cartService=inject(CartService))=>{
        return actions$.pipe(
            ofType(CartActions.loadCart),
            mergeMap(()=>cartService.getCart().pipe(
                map((cart:Cart[])=>CartActions.loadCartSuccess({cart:cart})),
                catchError(()=>of(CartActions.loadCartFailed({error:"API Failed"})))
            )))
    },
    {
        functional:true
    }
    )