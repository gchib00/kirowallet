import React from 'react';
import styled from 'styled-components';
import { ExpenseObj } from '../../types';

const MainContainer = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const Item = styled.tr`
  width: 100%;
  height: 34px;
  border: 2px solid black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.1rem;
`;
const Name = styled.div`
  width: 33.3%;
`;
const Value = styled.div`
  font-weight: bold;
  width: 33.3%;
`;
const Category = styled.div`
  width: 33.3%;
`;
interface Props {
  expenses: ExpenseObj[]
}

const ExpensesTable = ({ expenses }: Props) => {
  return (
    <MainContainer>
      <h3>EXPENSES TABLE</h3>
      {expenses.map((expense) => {
        return (
          <Item key={expense.name}>
            <Category>{expense.type}</Category>
            <Name>{expense.name}</Name>
            <Value>{expense.value}</Value>
          </Item>
        );
      })}
    </MainContainer>
  );
};

export default ExpensesTable;