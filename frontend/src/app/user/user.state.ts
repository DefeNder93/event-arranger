import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {addReducer} from "./add/add.reducer";
import {AppState} from "../reducers";
import {AddState} from "./models/user.model";

export const FEATURE_NAME = 'user';
export const selectUser = createFeatureSelector<State, UserFeatureState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<UserFeatureState> = {
  add: addReducer
};

export interface UserFeatureState {
  add: AddState;
}

export interface State extends AppState {
  user: UserFeatureState;
}
