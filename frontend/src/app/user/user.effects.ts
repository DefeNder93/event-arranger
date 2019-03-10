import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ActionUserLoad, UserActionTypes} from "./components/user/user.actions";
import {Api} from "../core/api.service";
import {Notifications} from "../core/notifications.service";
import {of} from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions<Action>,
    private notifications: Notifications,
    private api: Api
  ) {}

  @Effect()
  loadUsers = this.actions$.pipe(
    ofType(UserActionTypes.FETCH),
    switchMap(() => this.api.getUsers()),
    map(users => new ActionUserLoad({ users })),
    catchError(e => of(this.notifications.notLoadedServerError('Users', true, e)))
  );
}
