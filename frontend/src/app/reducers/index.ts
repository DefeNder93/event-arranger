import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {debug} from "./debug.reducer";

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];
