
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productFeatureKey } from "./product.reducer";

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

export const loadingProducts =  createSelector(
    selectProductState,
    (state:ProductState)=>state?.loadingProducts
)
export const allProducts = createSelector(
    selectProductState,
    (state:ProductState)=>state?.products
)
export const productCount = createSelector(
    selectProductState,
    (state:ProductState)=>state?.productCount
)
export const selectError =  createSelector(
    selectProductState,
    (state:ProductState)=>state?.error
)