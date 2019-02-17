import { Action } from '@ngrx/store';
import {User} from '../../models/user.model';

export enum UserActionTypes {
  ADD = '[User] Add',
  DELETE = '[User] Delete'
}

export class ActionUserAdd implements Action {
  readonly type = UserActionTypes.ADD;
  constructor(readonly payload: { user: User }) {}
}

export class ActionUserDelete implements Action {
  readonly type = UserActionTypes.DELETE;
  constructor(readonly payload: { id: string }) {}
}

export type UserActions = ActionUserAdd | ActionUserDelete;


