import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

  return (
    <Form>
      <InputField 
        placeholder="Email address" 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField 
        placeholder="Password" 
        type="password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField 
        placeholder="Repeat password" 
        type="passwordRepeat"
        autoComplete="off"
        value={repeatedPassword}
        onChange={(e) => setRepeatedPassword(e.target.value)}
      />
      <SubmitButton type="submit">Register</SubmitButton>
    </Form>
  );
};

export default RegisterForm;