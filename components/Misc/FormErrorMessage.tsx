import React from 'react';
import styled from 'styled-components';

const Error = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  color: red;
`;

interface Props {
  errorText: string | null;
}

const FormErrorMessage = ({ errorText }: Props) => {
  if (!errorText) {
    return null;
  }
  return (
    <Error>{errorText}</Error>
  );
};

export default FormErrorMessage;