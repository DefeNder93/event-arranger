import {ChangeDetectionStrategy, Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {User, UserRow} from '../../../core/models/user.model';
import {State} from '../../user.state';
import {select, Store} from '@ngrx/store';
import {selectAllUsers, selectEditingIds, selectSearchQuery} from './user.selectors';
import {
  ActionUserDelete,
  ActionUserFetch,
  ActionUserSearchUpdate,
  ActionUserToggleEditState,
  ActionUserUpdate
} from './user.actions';
import {map, distinctUntilChanged, debounceTime, take, takeUntil} from 'rxjs/operators';
import {FormBuilder, FormControl} from '@angular/forms';
import {combineLatest, ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, OnDestroy {

  userRows$: Observable<UserRow[]>;
  destroy$ = new ReplaySubject(1);
  search = new FormControl('');
  search$ = this.search.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged()
  );

  private searchQuery$: Observable<string> = this.store.pipe(select(selectSearchQuery));

  constructor(private store: Store<State>, private fb: FormBuilder) {
    this.loadUserRows();
    this.loadFirstSearchValue();
    this.registerSearchSaving();
  }

  ngOnInit() {
    this.store.dispatch(new ActionUserFetch());
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

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

    this.userRows$ = combineLatest(editingIds$, users$, this.searchQuery$).pipe(
      map(([ids, users, search]) => this.buildUserRows(ids, users, search))
    );
  }

  private registerSearchSaving = () => this.search$
    .pipe(takeUntil(this.destroy$))
    .subscribe(query => this.store.dispatch(new ActionUserSearchUpdate({query})))

  private loadFirstSearchValue = () => this.searchQuery$
    .pipe(take(1))
    .subscribe(query => this.search.setValue(query))

}
