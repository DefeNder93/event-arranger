import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {take} from "rxjs/operators";
import {ActionUserReset, ActionUserUpdate} from "../user.actions";
import {State} from "../user.state";
import {selectUserState} from "../user.selectors";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.email, Validators.maxLength(30)]]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store
      .pipe(
        select(selectUserState),
        take(1)
      )
      .subscribe(state => this.userForm.patchValue(state.user));
  }

  submit = () => {
    this.store.dispatch(new ActionUserUpdate({user: this.userForm.value}))
  };

  reset = () => {
    this.userForm.reset();
    this.userForm.clearValidators();
    this.store.dispatch(new ActionUserReset());
  };

  invalid = (field: string) => this.userForm.get(field).invalid;

}
