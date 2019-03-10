import { createSelector } from '@ngrx/store';


import {selectUser, UserFeatureState} from "../../user.state";
import {userAdapter} from "./user.reducer";

const { selectAll } = userAdapter.getSelectors();

export const selectUsers = createSelector(
  selectUser,
  (state: UserFeatureState) => state.users
);

export const selectAllUsers = createSelector(selectUsers, selectAll);

export const selectEditingIds = createSelector(
  selectUser,
  (state: UserFeatureState) => state.users.editing_ids
);

export const selectSearchQuery = createSelector(
  selectUser,
  (state: UserFeatureState) => state.users.searchQuery
);
