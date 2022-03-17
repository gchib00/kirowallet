//Backend

export interface UserRegistrationObj {
  email: string;
  password: string;
  repeatedPassword: string;
}
export interface UserLoginObj {
  email: string;
  password: string;
}
 
//Frontned

export interface User {
  createdAt: string;
  email: string;
  password: string;
  id: number;
}