import { Action } from '@ngrx/store';
import {User} from "./models/user.model";

export enum UserActionTypes {
  UPDATE = '[User] Update',
  RESET = '[User] Reset'
}

export class ActionUserUpdate implements Action {
  readonly type = UserActionTypes.UPDATE;
  constructor(readonly payload: { user: User }) {}
}

export class ActionUserReset implements Action {
  readonly type = UserActionTypes.RESET;
}

export type UserActions = ActionUserUpdate | ActionUserReset;
