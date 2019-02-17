import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {userReducer} from "./user.reducer";
import {AppState} from "../reducers";
import {UserState} from "./models/user.model";

export const FEATURE_NAME = 'user';
export const selectUser = createFeatureSelector<State, UserFeatureState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<State> = {
  user: userReducer
};

export interface UserFeatureState {
  user: UserState;
}

export interface State extends AppState {
  user: UserState;
}
