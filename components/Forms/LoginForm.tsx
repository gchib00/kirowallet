import React, { Fragment } from 'react';
import styled from 'styled-components';

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
const RegisterLink = styled.div`
  margin: 5px auto 5px auto;
`;

interface Props {
  setRegisterationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setRegisterationModal }: Props) => {
  return (
    <Fragment>
      <InputField 
        placeholder="Email address" 
        type="text"
      />
      <InputField 
        placeholder="Password" 
        type="password"
        autoComplete="off"
      />
      <SubmitButton type="submit">Login</SubmitButton>
      <RegisterLink>
        Don&apos;t have an account yet? <a onClick={() => setRegisterationModal(true)}>Register</a>
      </RegisterLink>
    </Fragment>
  );
};

export default LoginForm;