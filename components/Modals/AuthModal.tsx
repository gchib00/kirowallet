import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import useModalCloser from '../../custom_hooks/useModalCloser';
import AuthModalContext from '../context/AuthModalContext';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
import Dimmer from './Dimmer';

const Modal = styled.div`
  width: 20vw;
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const AuthModal = () => {
  const [registrationModal, setRegisterationModal] = useState<boolean>(false);
  const { loginModal, setLoginModal } = useContext(AuthModalContext);

  const dimmerRef = useRef<HTMLDivElement>(null); 
  useModalCloser({ //custom hook responsible for closing the modal/dimmer as soon as user clicks outside the modal
    ref: dimmerRef,
    setModalState: setLoginModal,
  });
  
  if (loginModal === false){
    return null;
  }
  return (
    <Dimmer>
      <Modal ref={dimmerRef}>
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