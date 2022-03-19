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
export interface IncomeObj {
  name: string;
  type: string;
  value: number;
}
export interface ExpenseObj extends IncomeObj {}
//Frontned

export interface User {
  createdAt: string;
  email: string;
  password: string;
  id: number;
}