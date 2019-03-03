import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, map } from 'rxjs/operators';

import { ActionUserLoad, UserActionTypes} from "./components/user/user.actions";
import {Api} from "../core/api.service";
import {State} from "./user.state";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions<Action>,
    private store: Store<State>,
    private api: Api
  ) {}

  @Effect()
  loadUsers = this.actions$.pipe(
    ofType(UserActionTypes.FETCH),
    switchMap(() => this.api.getUsers()),
    map(users => new ActionUserLoad({ users }))
  );
}
