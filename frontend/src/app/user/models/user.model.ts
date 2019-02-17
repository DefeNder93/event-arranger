import {EntityState} from "@ngrx/entity";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface AddState {
  user: User;
}

export interface UserState extends EntityState<User> {}
