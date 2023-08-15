import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore,provideState } from '@ngrx/store';
import { provideStoreDevtools, } from '@ngrx/store-devtools';

import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import {CategoryEffects, categoryFeature} from '@nx-shop/category'
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation(),withComponentInputBinding()), 
    provideAnimations(),
    provideHttpClient(),
    provideStore(),
    provideState(categoryFeature),
    provideEffects([CategoryEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ],
};
