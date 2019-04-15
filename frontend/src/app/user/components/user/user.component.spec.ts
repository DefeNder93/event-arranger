import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { UserComponent } from './user.component';
import {FEATURE_NAME, reducers, UserFeatureState} from '../../user.state';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import 'jest';
import {User, UserRow} from '../../../core/models/user.model';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {Store, StoreModule} from '@ngrx/store';
import {metaReducers} from '../../../reducers';
import {UserActionTypes} from './user.actions';
import {take} from 'rxjs/operators';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const initialState = {
    add: {
      user: new User()
    },
    users: {
      editing_ids: ['3'],
      ids: ['3'],
      entities: {
        '3': {
          id: '3'
        }
      },
      searchQuery: ''
    }
  };
  let store: MockStore<UserFeatureState>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      declarations: [ UserComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should start editing', () => {
    const userRow = new UserRow();
    userRow.id = '3';
    component.startEditing(userRow);
    expect(userRow.editForm).toBeDefined();
  });

  test('should delete user', (done) => {
    const userRow = new UserRow();
    userRow.id = '3';
    component.delete(userRow);
    expect(store.dispatch).toHaveBeenCalledWith({payload: {id: '3'}, type: UserActionTypes.DELETE});

    store.pipe(take(1)).subscribe(state => {
      console.log('checking state', state);
      expect(state.users.ids[0]).toBe('3');
      done();
    });
  });

});
