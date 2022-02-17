import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserLoginObj } from '../../types';
import AuthModalContext from '../context/AuthModalContext';
import LoggedUserContext from '../context/LoggedUserContext';
import FormErrorMessage from '../Misc/FormErrorMessage';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const InputField = styled.input`
  height: 38px;
  padding-left: 8px;
  margin-top: 4px;
  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
`;
const SubmitButton = styled.button`
  background-color: #1652F0;
  border: 1px solid #1652F0;
  height: 38px;
  font-size: 1.1rem;
  border-radius: 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  margin: 8px 0px 8px 0px;
}
&:hover {
  background-color: #0A46E4;
  border-color: #0A46E4;
}
`;

const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');
  const { setLoginModal } = useContext(AuthModalContext);
  const { setLoggedUser } = useContext(LoggedUserContext);
  
  const autoLogin = async (credentials: UserLoginObj) => {
    const request = await fetch('/api/users/login', { //pass credentials to the backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const response = await request.json();
    //save token to localStorage so that user can be automatcally logged in after they reconnect to the app
    localStorage.setItem('token', response.token);
    setLoggedUser(response.user); //save user to the state
    setLoginModal(false); //close the modal
  };
  const attemptUserRegister = async () => {
    setError(''); //make sure error gets removed (in case it was already present)
    const newUserObj = {
      email: email,
      password: password,
      repeatedPassword: repeatedPassword,
    };
    const request = await fetch('/api/users/createNew', { //pass newUserObj to the backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUserObj),
    });
    if (!request.ok) { //display error message if request fails
      const response = await request.json();
      return response.message ? setError(response.message) : setError(response.error);
    } else { //if registration is successful, automatically log-in the user
      const credentials = {
        email: newUserObj.email,
        password: newUserObj.password,
      };
      autoLogin(credentials);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    attemptUserRegister();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputField 
        placeholder='Email address' 
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField 
        placeholder='Password' 
        type='password'
        autoComplete='off'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField 
        placeholder='Repeat password' 
        type='password'
        autoComplete='off'
        value={repeatedPassword}
        onChange={(e) => setRepeatedPassword(e.target.value)}
      />
      <SubmitButton type='submit'>Register</SubmitButton>
      <FormErrorMessage errorText={error} /> 
    </Form>
  );
};

export default RegisterForm;