import React, { useContext, useState } from 'react';
import styled from 'styled-components';
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
const RegisterText = styled.div`
  margin: 5px auto 5px auto;
`;
const RegisterBtn = styled.span`
  color: #E5383B;
  text-decoration: underline;
  cursor: pointer;
`;

interface Props {
  setRegisterationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setRegisterationModal }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { setLoginModal } = useContext(AuthModalContext);
  const { setLoggedUser } = useContext(LoggedUserContext);
  
  const attemptLogin = async () => {
    const credentials = {
      email: email,
      password: password,
    };
    const request = await fetch('/api/users/login', { //pass credentials to the backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const response = await request.json();
    if (!request.ok) { //display error message if request fails
      return response.message ? setError(response.message) : setError(response.error);
    } else {
      //save token to localStorage so that user can be automatcally logged in after they reconnect to the app
      localStorage.setItem('token', response.token);
      setLoggedUser(response.user); //save user to the state
      setLoginModal(false); //close the modal
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    attemptLogin();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputField 
        placeholder='Email address' 
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField 
        placeholder='Password' 
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton type='submit'>Login</SubmitButton>
      <RegisterText>
        Don&apos;t have an account yet? <RegisterBtn onClick={() => setRegisterationModal(true)}>Register</RegisterBtn>
      </RegisterText>
      <FormErrorMessage errorText={error} /> 
    </Form>
  );
};

export default LoginForm;