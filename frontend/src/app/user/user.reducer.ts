import {User, UserState} from "./models/user.model";
import {UserActions, UserActionTypes} from "./user.actions";


export const initialState: UserState = {
  user: {} as User
};

export function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.UPDATE:
      return {
        ...state,
        user: action.payload.user
      };
    case UserActionTypes.RESET:
      return initialState;

    default:
      return state;
  }
}
