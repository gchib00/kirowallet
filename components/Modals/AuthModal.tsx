import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
import Dimmer from './Dimmer';

const Modal = styled.form`
  width: 20vw;
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

interface Props {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthModal = ({ loginModal, setLoginModal }: Props) => {
  const [registrationModal, setRegisterationModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
    setLoginModal(false);
  };
  if (loginModal === false){
    return null;
  }
  return (
    <Dimmer>
      <Modal onSubmit={(e) => handleSubmit(e)}>
        {registrationModal ? //if registrationModal is set active, show register form, otherwise show login form
          <RegisterForm /> 
          :
          <LoginForm setRegisterationModal={setRegisterationModal} /> 
        }
      </Modal>
    </Dimmer>
  );
};

export default AuthModal;