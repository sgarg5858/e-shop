import {  createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "./product";

export const ProductActions = createActionGroup({
    source:'Products Page',
    events:{
        loadProductsByCategory: props<{categoryName:string}>(),
        loadAllProducts: emptyProps(),
        productsLoadedSuccess:props<{products:Product[]}>(),
        productsLoadedFailure:props<{error:string}>()
    }
})
