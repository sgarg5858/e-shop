import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../product.service";
import { ProductActions, } from "./product.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Product } from "./product";

export const loadProductsByCategory = createEffect(
    (actions$ = inject(Actions), 
     productService = inject(ProductService)
    ) =>{
        return actions$.pipe(
            ofType(ProductActions.loadProductsByCategory),
            switchMap(({categoryName})=> productService.getProductsForCategory(categoryName).pipe(
                map((products:Product[])=> ProductActions.productsLoadedSuccess({products})),
                catchError((err)=> of(ProductActions.productsLoadedFailure({error:"API Failed"})))
            ) 
            )
        )
    },
    {functional:true}
)

export const loadAllProductsEffect = createEffect(
    (actions$ = inject(Actions), 
     productService = inject(ProductService)
    ) =>{
        return actions$.pipe(
            ofType(ProductActions.loadAllProducts),
            switchMap(()=> productService.getAllProducts().pipe(
                map((products:Product[])=> ProductActions.productsLoadedSuccess({products})),
                catchError(()=> of(ProductActions.productsLoadedFailure({error:"API Failed"})))
            ) 
            )
        )
    },
    {functional:true}
)