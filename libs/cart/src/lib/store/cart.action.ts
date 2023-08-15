import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Cart } from "../cart.model";

export const CartActions = createActionGroup(
    {
        source:'Cart Page',
        events:{
            loadCart:emptyProps(),
            loadCartSuccess:props<{cart:Cart[]}>(),
            loadCartFailed:props<{error:string}>()
        }
    }
)