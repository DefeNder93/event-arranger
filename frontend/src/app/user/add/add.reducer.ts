import {User, AddState} from "../models/user.model";
import {AddActions, AddActionTypes} from "./add.actions";


export const initialState: AddState = {
  user: {} as User
};

export function addReducer(
  state: AddState = initialState,
  action: AddActions
): AddState {
  switch (action.type) {
    case AddActionTypes.UPDATE:
      return {
        ...state,
        user: action.payload.user
      };
    case AddActionTypes.RESET:
      return initialState;

    default:
      return state;
  }
}
