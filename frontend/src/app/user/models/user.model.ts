export interface User {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface UserState {
  user: User;
}
