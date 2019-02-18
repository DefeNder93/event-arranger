import { Action } from '@ngrx/store';
import {User} from '../../models/user.model';

export enum UserActionTypes {
  ADD = '[User] Add',
  UPDATE = '[User] Update',
  DELETE = '[User] Delete',
  TOGGLE_EDIT_STATE = '[User] Toggle Edit State'
}

export class ActionUserAdd implements Action {
  readonly type = UserActionTypes.ADD;
  constructor(readonly payload: { user: User }) {}
}

export class ActionUserUpdate implements Action {
  readonly type = UserActionTypes.UPDATE;
  constructor(readonly payload: { user: User }) {}
}

export class ActionUserDelete implements Action {
  readonly type = UserActionTypes.DELETE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionUserToggleEditState implements Action {
  readonly type = UserActionTypes.TOGGLE_EDIT_STATE;
  constructor(readonly payload: { id: string }) {}
}

export type UserActions = ActionUserAdd | ActionUserDelete | ActionUserToggleEditState | ActionUserUpdate;


