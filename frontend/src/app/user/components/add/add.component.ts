import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {take} from "rxjs/operators";
import {ActionAddReset, ActionAddUpdate} from "./add.actions";
import {State} from "../../user.state";
import {selectUserState} from "./add.selectors";
import {ActionUserAdd} from "../user/user.actions";
import { v4 as uuid } from 'uuid';
import {Utils} from "../../../core/utils.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userForm = this.fb.group({
    id: [uuid()],
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.email, Validators.required, Validators.maxLength(30)]]
  });

  constructor(private fb: FormBuilder, private store: Store<State>, private utils: Utils) { }

  ngOnInit() {
    this.store
      .pipe(
        select(selectUserState),
        take(1)
      )
      .subscribe(state => this.userForm.patchValue(state.user));
  }

  add = () => {
    if (!this.userForm.valid) {
      return;
    }
    this.store.dispatch(new ActionAddUpdate({ user: this.userForm.value }));  // saves the form when user switches between tabs
    this.store.dispatch(new ActionUserAdd({ user: this.userForm.value }));
    this.reset()
  };

  reset = () => {
    this.userForm.reset();
    this.utils.resetForm(this.userForm);
    this.userForm.clearValidators();
    this.store.dispatch(new ActionAddReset());
  };

  invalid = (field: string) => this.userForm.get(field).invalid;

}
