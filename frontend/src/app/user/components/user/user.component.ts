import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {User} from "../../models/user.model";
import {State} from "../../user.state";
import {select, Store} from "@ngrx/store";
import {selectAllUsers} from "./user.selectors";
import {ActionUserDelete} from "./user.actions";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]> = this.store.pipe(select(selectAllUsers));

  constructor(private store: Store<State>) {}

  delete = (user: User) => this.store.dispatch(new ActionUserDelete({ id: user.id }));

  ngOnInit() {
  }

}
