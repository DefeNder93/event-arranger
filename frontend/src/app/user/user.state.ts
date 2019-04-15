import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {addReducer} from './components/add/add.reducer';
import {AppState} from '../reducers';
import {AddState, UserState} from '../core/models/user.model';
import {userReducer} from './components/user/user.reducer';

export const FEATURE_NAME = 'user';
export const selectUser = createFeatureSelector<State, UserFeatureState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<UserFeatureState> = {
  add: addReducer,
  users: userReducer
};

export interface UserFeatureState {
  add: AddState;
  users: UserState;
}

export interface State extends AppState {
  user: UserFeatureState;
}
