//Backend

//Auth:
export interface UserRegistrationObj extends User {
  repeatedPassword: string;
}
export interface UserLoginObj {
  username: string;
  password: string;
}
export interface User {
  username: string;
  email?: string;
  password: string;
}