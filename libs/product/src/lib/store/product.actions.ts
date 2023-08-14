import { createAction, createActionGroup, props } from "@ngrx/store";
import { Product } from "./product";


// Approach 1 to create Actions
// export const getProductsForCategory = createAction(
//     '[Category Page] Get Products',
//     props<{categoryName:string}>()
// )

// export const getProductsForCategoryGotSuccess = createAction(
//     '[productsPerCategory API] Success',
//     props<{products:Product[]}>()
// )

// export const getProductsForCategoryGotFailed = createAction(
//     '[productsPerCategory API] Failed',
//     props<{error:string}>()
// )

export const ProductsForCategoryActions = createActionGroup({
    source:'Product Per Category Page',
    events:{
        'loadProducts': props<{categoryName:string}>(),
        'productsLoadedSuccess':props<{products:Product[]}>(),
        'productsLoadedFailure':props<{error:string}>()
    }
})