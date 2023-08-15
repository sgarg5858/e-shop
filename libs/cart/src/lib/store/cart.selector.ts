import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CART_FEATURE_KEY, CartState } from "./cart.reducer";

export const cartFeatureSelector = createFeatureSelector<CartState>(CART_FEATURE_KEY);

export const loadingCart = createSelector(
    cartFeatureSelector,
    (state:CartState)=>state.loadingCart
)
export const cart = createSelector(
    cartFeatureSelector,
    (state:CartState)=>state.cart
)