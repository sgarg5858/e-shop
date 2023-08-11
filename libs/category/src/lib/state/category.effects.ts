import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { getCategories, getCategoriesFailure, getCategoriesSuccess } from './category.actions';
import { catchError, concatMap, map, of } from 'rxjs';
import { CategoryService } from '../category.service';

@Injectable()
export class CategoryEffects {
 
  getCategories$ = createEffect(() => this.actions$.pipe(
    ofType(getCategories),
    concatMap(()=>this.categoryService.getCategories().pipe(
        map((categories)=> getCategoriesSuccess({categories})),
        catchError(() => of( getCategoriesFailure({error:"API FAILURE"}) ))
    )
    )
    )
  );
 
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}
}