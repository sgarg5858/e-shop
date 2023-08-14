import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../product.service";
import { ProductsForCategoryActions } from "./product.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Product } from "./product";

export const loadProducts = createEffect(
    (actions$ = inject(Actions), 
     productService = inject(ProductService)
    ) =>{
        return actions$.pipe(
            ofType(ProductsForCategoryActions.loadProducts),
            switchMap(({categoryName})=> productService.getProductsForCategory(categoryName).pipe(
                map((products:Product[])=> ProductsForCategoryActions.productsLoadedSuccess({products})),
                catchError((err)=> of(ProductsForCategoryActions.productsLoadedFailure({error:"API Failed"})))
            ) 
            )
        )
    },
    {functional:true}
)