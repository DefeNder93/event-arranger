import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import {User, UserState} from "../../models/user.model";
import {UserActions, UserActionTypes} from "./user.actions";


export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: UserState = userAdapter.getInitialState({
  ids: ['1', '2', '3'],
  editing_ids: [],
  searchQuery: '',
  entities: {
    '1': {
      id: '1',
      firstName: 'Alex',
      lastName: 'K',
      password: '1111',
      email: 'alex@eddf.df'
    },
    '2': {
      id: '2',
      firstName: 'Max',
      lastName: 'K',
      password: '1111',
      email: 'max@eddf.df'
    },
    '3': {
      id: '3',
      firstName: 'Bob',
      lastName: 'F',
      password: '1111',
      email: 'bob@eddf.df'
    }
  }
});

const toggleEditingIds = (id, editing_ids) => {
  const out = [...editing_ids];
  out.indexOf(id) === -1 ? out.push(id) : out.splice(editing_ids.indexOf(id), 1);
  return out;
}

export function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.ADD:
      return userAdapter.upsertOne(action.payload.user, state);

    case UserActionTypes.UPDATE:
      return userAdapter.upsertOne(action.payload.user, state);

    case UserActionTypes.DELETE:
      return userAdapter.removeOne(action.payload.id, state);

    case UserActionTypes.TOGGLE_EDIT_STATE:
      return {
        ...state,
        editing_ids: toggleEditingIds(action.payload.id, state.editing_ids)
      };

    case UserActionTypes.SEARCH:
      return {
        ...state,
        searchQuery: action.payload.query
      };

    default:
      return state;
  }
}
