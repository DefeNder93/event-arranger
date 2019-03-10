import { Action } from '@ngrx/store';
import {User} from '../../../core/models/user.model';

export enum UserActionTypes {
  ADD = '[User] Add',
  UPDATE = '[User] Update',
  DELETE = '[User] Delete',
  SEARCH = '[User] Search',
  TOGGLE_EDIT_STATE = '[User] Toggle Edit State',
  FETCH = '[User] Get Users',
  LOAD = '[User] Load Users',
}

export class ActionUserAdd implements Action {
  readonly type = UserActionTypes.ADD;
  constructor(readonly payload: { user: User }) {}
}

export class ActionUserUpdate implements Action {
  readonly type = UserActionTypes.UPDATE;
  constructor(readonly payload: { user: User }) {}
}

export class ActionUserLoad implements Action {
  readonly type = UserActionTypes.LOAD;
  constructor(readonly payload: { users: User[] }) {}
}

export class ActionUserDelete implements Action {
  readonly type = UserActionTypes.DELETE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionUserToggleEditState implements Action {
  readonly type = UserActionTypes.TOGGLE_EDIT_STATE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionUserSearchUpdate implements Action {
  readonly type = UserActionTypes.SEARCH;
  constructor(readonly payload: { query: string }) {}
}

export class ActionUserFetch implements Action {
  readonly type = UserActionTypes.FETCH;
  constructor() {}
}

export type UserActions = ActionUserAdd | ActionUserDelete | ActionUserToggleEditState | ActionUserUpdate | ActionUserSearchUpdate | ActionUserLoad | ActionUserFetch;


