import { createFeature, createReducer, on } from "@ngrx/store";
import {getCategoriesSuccess,getCategoriesFailure} from './category.actions';

export const categoryFeatureKey = 'category';

export interface CategoryState{
    categories:string[];
    currentCategory:string;
    error:string;
}
export const initialCategoryState:CategoryState = {
    categories:[],
    currentCategory:"",
    error:""
}

export const categoryReducer = createReducer(
    initialCategoryState,
    on(getCategoriesSuccess,(state,action)=>{
        return {
            ...state,
            categories:action.categories,
            error:''
        }
    }),
    on(getCategoriesFailure,(state,action)=>{
        return {
            ...state,
            error:action.error,
            categories:[]
        }
    })
)

export const categoryFeature = createFeature({
    name:categoryFeatureKey,
    reducer:categoryReducer
})