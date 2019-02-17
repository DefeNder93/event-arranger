import { createSelector } from '@ngrx/store';

import {selectUser, UserFeatureState} from "../user.state";

export const selectUserState = createSelector(
  selectUser,
  (state: UserFeatureState) => state.add
);
