import { createAction, props } from '@ngrx/store';

export const getCategories = createAction('[Category] Get Categories');

export const getCategoriesSuccess  = createAction(
    '[Category] Get Categories Success',
    props<{categories:string[]}>()
    );

export const getCategoriesFailure  = createAction(
    '[Category] Get Categories Failure',
    props<{error:string}>()
    );
