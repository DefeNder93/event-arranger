import { Action } from '@ngrx/store';
import {User} from "../../../core/models/user.model";

export enum AddActionTypes {
  UPDATE = '[Add User] Update',
  RESET = '[Add User] Reset'
}

export class ActionAddUpdate implements Action {
  readonly type = AddActionTypes.UPDATE;
  constructor(readonly payload: { user: User }) {}
}

export class ActionAddReset implements Action {
  readonly type = AddActionTypes.RESET;
}

export type AddActions = ActionAddUpdate | ActionAddReset;
