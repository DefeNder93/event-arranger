import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import {User, UserState} from "../../models/user.model";
import {UserActions, UserActionTypes} from "./user.actions";


export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: UserState = userAdapter.getInitialState({
  ids: [],
  entities: {}
});

export function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.ADD:
      return userAdapter.upsertOne(action.payload.user, state);

    case UserActionTypes.DELETE:
      return userAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}
