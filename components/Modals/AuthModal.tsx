import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useModalCloser from '../../custom_hooks/useModalCloser';
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

  const dimmerRef = useRef<HTMLFormElement>(null); 
  useModalCloser({ //custom hook responsible for closing the modal/dimmer as soon as user clicks outside the modal
    ref: dimmerRef,
    setModalState: setLoginModal,
  });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    setLoginModal(false);
  };

  if (loginModal === false){
    return null;
  }
  return (
    <Dimmer>
      <Modal ref={dimmerRef} onSubmit={(e) => handleSubmit(e)}>
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