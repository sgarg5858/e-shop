import { createFeature, createReducer, on } from "@ngrx/store";
import { CartActions } from "./cart.action";
import { Cart } from "../cart.model";

export const CART_FEATURE_KEY="cart"

export interface CartState{
    loadingCart:boolean;
    cart:Cart[];
    error:string|null;
}

const initialCartState:CartState={
    loadingCart:false,
    cart:[],
    error:null
};

export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.loadCart,(state,)=> ({...state, loadingCart:true,cart:[],error:null})),
    on(CartActions.loadCartSuccess,(state,action)=> ({...state, loadingCart:false,cart:action.cart,error:null})),
    on(CartActions.loadCartFailed,(state,)=> ({...state, loadingCart:false,cart:[],error:"API FAILED"}))
)

export const CART_FEATURE = createFeature({name:CART_FEATURE_KEY,reducer:cartReducer})