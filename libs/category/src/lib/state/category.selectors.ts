import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoryState, categoryFeatureKey } from "./category.reducer";

export const selectCategoryState = createFeatureSelector<CategoryState>(categoryFeatureKey);

export const selectCurrentCategory =  createSelector(
    selectCategoryState,
    (state:CategoryState)=>state?.currentCategory
)
export const selectCategories = createSelector(
    selectCategoryState,
    (state:CategoryState)=>state?.categories
)

export const selectError =  createSelector(
    selectCategoryState,
    (state:CategoryState)=>state?.error
)