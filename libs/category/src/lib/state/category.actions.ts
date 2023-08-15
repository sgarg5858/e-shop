import { createAction, props } from '@ngrx/store';

export const getCategories = createAction('[Home Page] Load Categories');

export const getCategoriesSuccess  = createAction(
    '[Get Categories API] Load Categories Success',
    props<{categories:string[]}>()
    );

export const getCategoriesFailure  = createAction(
    '[Get Categories API] Load Categories Failure',
    props<{error:string}>()
    );
