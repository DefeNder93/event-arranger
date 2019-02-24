import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {User, UserRow} from "../../models/user.model";
import {State} from "../../user.state";
import {select, Store} from "@ngrx/store";
import {selectAllUsers, selectEditingIds} from "./user.selectors";
import {ActionUserDelete, ActionUserToggleEditState, ActionUserUpdate} from "./user.actions";
import {map, tap, distinctUntilChanged, debounceTime, startWith} from "rxjs/operators";
import {FormBuilder, FormControl} from "@angular/forms";
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  userRows$ : Observable<UserRow[]>;
  search = new FormControl('');
  search$ = this.search.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    startWith('')
  );

  constructor(private store: Store<State>, private fb: FormBuilder) {
    this.loadUserRows();
  }

  ngOnInit() {}

  delete = (user: UserRow) => this.store.dispatch(new ActionUserDelete({ id: user.id }));

  save = (user: UserRow) => {
    this.store.dispatch(new ActionUserUpdate({user: user.editForm.value}));
    delete user.editForm;
    this.toggleEditState(user);
  }

  startEditing = (user: UserRow) => {
    user.editForm = this.fb.group(user);
    this.toggleEditState(user);
  }

  cancelEditing = (user: UserRow) => {
    delete user.editForm;
    this.toggleEditState(user);
  }

  private toggleEditState = (user: UserRow) => this.store.dispatch(new ActionUserToggleEditState({ id: user.id }));

  private buildUserRows = (ids, users, search) => {
    const userRows: UserRow[] = users;
    userRows.forEach(e => e.editing = ids.indexOf(e.id) !== -1);
    return search ? userRows.filter(e => e.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1) : userRows;
  }

  private loadUserRows = () => {
    const users$: Observable<User[]> = this.store.pipe(select(selectAllUsers));
    const editingIds$: Observable<string[]> = this.store.pipe(select(selectEditingIds));

    this.userRows$ = combineLatest(editingIds$, users$, this.search$).pipe(
      map(([ids, users, search]) => this.buildUserRows(ids, users, search))
    );
  }

}
