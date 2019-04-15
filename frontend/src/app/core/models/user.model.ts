import {EntityState} from "@ngrx/entity";
import {FormGroup} from "@angular/forms";

export class User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export class UserRow extends User {
  editing: boolean;
  editForm: FormGroup;
}

export interface AddState {
  user: User;
}

export interface UserState extends EntityState<User> {
  editing_ids: string[],
  searchQuery: string;
}
