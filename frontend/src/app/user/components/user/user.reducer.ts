import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {User, UserState} from '../../../core/models/user.model';
import {UserActions, UserActionTypes} from './user.actions';

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: UserState = userAdapter.getInitialState({
  ids: [],
  editing_ids: [],
  searchQuery: '',
  entities: {}
});

const toggleEditingIds = (id, editing_ids) => {
  const out = [...editing_ids];
  out.indexOf(id) === -1 ? out.push(id) : out.splice(editing_ids.indexOf(id), 1);
  return out;
};

export function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.LOAD:
      return userAdapter.upsertMany(action.payload.users, state);

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
