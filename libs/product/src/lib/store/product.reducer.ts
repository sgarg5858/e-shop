import { createFeature, createReducer, on } from "@ngrx/store"
import { ProductsForCategoryActions } from "./product.actions"
import { Product } from "./product";

export interface ProductState{
    loadingProducts:boolean;
    products:Product[];
    productCount:number;
    error:string|null;
}
export const productFeatureKey='product'
export const initialProductState:ProductState={
    loadingProducts:false,
    productCount:0,
    products:[],
    error:null
}
export const productReducer = createReducer(
    initialProductState,
    on(ProductsForCategoryActions.loadProducts,(state,_) => {
        return {
            ...state,
            loadingProducts:true,
            products:[],
            error:'',
            productCount:0
        }
    }),
    on(ProductsForCategoryActions.productsLoadedSuccess,(state,actions) => {
        return {
            ...state,
            loadingProducts:false,
            products:actions.products,
            productCount:actions.products.length ?? 0
        }
    }),
    on(ProductsForCategoryActions.productsLoadedFailure,(state,action) => {
        return {
            ...state,
            loadingProducts:false,
            error:action.error,
            products:[],
            productCount:0
        }
    })
)
export const productFeature = createFeature({
    name:productFeatureKey,
    reducer:productReducer
})